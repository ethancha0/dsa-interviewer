import { GOOGLE_AUTH_STATE_COOKIE } from "@/lib/auth/google-session";
import { NextResponse, type NextRequest } from "next/server";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

export function GET(request: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();

  if (!clientId) {
    return redirectWithError(request, "missing_google_client_id");
  }

  const state = crypto.randomUUID();
  const redirectUri = new URL("/api/auth/google/callback", request.url);
  const authUrl = new URL(GOOGLE_AUTH_URL);

  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri.toString());
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "openid email profile");
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("prompt", "select_account");

  const response = NextResponse.redirect(authUrl);

  response.cookies.set(GOOGLE_AUTH_STATE_COOKIE, state, {
    httpOnly: true,
    maxAge: 60 * 10,
    path: "/",
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
  });

  return response;
}

function redirectWithError(request: NextRequest, error: string) {
  const authUrl = new URL("/auth", request.url);

  authUrl.searchParams.set("error", error);

  return NextResponse.redirect(authUrl);
}
