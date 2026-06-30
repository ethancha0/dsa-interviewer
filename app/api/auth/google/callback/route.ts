import {
  GOOGLE_AUTH_STATE_COOKIE,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  type GoogleSession,
} from "@/lib/auth/google-session";
import { NextResponse, type NextRequest } from "next/server";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://openidconnect.googleapis.com/v1/userinfo";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const state = requestUrl.searchParams.get("state");
  const expectedState = request.cookies.get(GOOGLE_AUTH_STATE_COOKIE)?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    return redirectWithError(request, "invalid_google_oauth_state");
  }

  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();

  if (!clientId || !clientSecret) {
    return redirectWithError(request, "missing_google_oauth_credentials");
  }

  const redirectUri = new URL("/api/auth/google/callback", request.url);
  const tokenPayload = await exchangeCodeForToken({
    clientId,
    clientSecret,
    code,
    redirectUri: redirectUri.toString(),
  });
  const accessToken = getStringPayloadValue(tokenPayload, "access_token");

  if (!accessToken) {
    return redirectWithError(request, "google_token_exchange_failed");
  }

  const profile = await fetchGoogleProfile(accessToken);
  const session = buildSession(profile);

  if (!session) {
    return redirectWithError(request, "google_profile_unavailable");
  }

  let sessionToken: string;

  try {
    sessionToken = await createSessionToken(session);
  } catch {
    return redirectWithError(request, "missing_auth_secret");
  }

  const response = NextResponse.redirect(new URL("/dashboard", request.url));

  response.cookies.delete(GOOGLE_AUTH_STATE_COOKIE);
  response.cookies.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
  });

  return response;
}

async function exchangeCodeForToken({
  clientId,
  clientSecret,
  code,
  redirectUri,
}: {
  clientId: string;
  clientSecret: string;
  code: string;
  redirectUri: string;
}) {
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
  });

  const response = await fetch(GOOGLE_TOKEN_URL, {
    body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  return response.json().catch(() => null) as Promise<unknown>;
}

async function fetchGoogleProfile(accessToken: string) {
  const response = await fetch(GOOGLE_USERINFO_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json().catch(() => null) as Promise<unknown>;
}

function buildSession(profile: unknown): GoogleSession | null {
  const sub = getStringPayloadValue(profile, "sub");
  const email = getStringPayloadValue(profile, "email");
  const emailVerified = getBooleanPayloadValue(profile, "email_verified");
  const name =
    getStringPayloadValue(profile, "name") ??
    getStringPayloadValue(profile, "given_name") ??
    email;

  if (!sub || !email || !name || emailVerified === false) {
    return null;
  }

  const image = getStringPayloadValue(profile, "picture") ?? undefined;

  return {
    email,
    expiresAt: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
    image,
    name,
    sub,
  };
}

function redirectWithError(request: NextRequest, error: string) {
  const authUrl = new URL("/auth", request.url);
  authUrl.searchParams.set("error", error);

  const response = NextResponse.redirect(authUrl);

  response.cookies.delete(GOOGLE_AUTH_STATE_COOKIE);

  return response;
}

function getStringPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || !(key in payload)) {
    return null;
  }

  const value = (payload as Record<string, unknown>)[key];

  return typeof value === "string" ? value.trim() || null : null;
}

function getBooleanPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || !(key in payload)) {
    return null;
  }

  const value = (payload as Record<string, unknown>)[key];

  return typeof value === "boolean" ? value : null;
}
