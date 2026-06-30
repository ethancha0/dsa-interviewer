import { cookies } from "next/headers";

export const GOOGLE_AUTH_STATE_COOKIE = "dsa_google_oauth_state";
export const SESSION_COOKIE = "dsa_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 14;

export type GoogleSession = {
  email: string;
  expiresAt: number;
  image?: string;
  name: string;
  sub: string;
};

const textEncoder = new TextEncoder();

export async function createSessionToken(session: GoogleSession) {
  const payload = base64UrlEncode(JSON.stringify(session));
  const signature = await sign(payload);

  return `${payload}.${signature}`;
}

export async function getGoogleSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function verifySessionToken(token: string) {
  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = await sign(payload);

  if (!timingSafeEqual(signature, expectedSignature)) {
    return null;
  }

  try {
    const session = JSON.parse(base64UrlDecode(payload)) as GoogleSession;

    if (!session.sub || !session.email || session.expiresAt < Date.now()) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export function getAuthSecret() {
  return process.env.AUTH_SECRET?.trim() || process.env.GOOGLE_CLIENT_SECRET?.trim() || "";
}

async function sign(payload: string) {
  const secret = getAuthSecret();

  if (!secret) {
    throw new Error("Missing AUTH_SECRET or GOOGLE_CLIENT_SECRET environment variable.");
  }

  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, textEncoder.encode(payload));

  return base64UrlEncodeBytes(new Uint8Array(signature));
}

function base64UrlEncode(value: string) {
  return base64UrlEncodeBytes(textEncoder.encode(value));
}

function base64UrlEncodeBytes(bytes: Uint8Array) {
  return Buffer.from(bytes)
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(value: string) {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const paddedBase64 = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");

  return Buffer.from(paddedBase64, "base64").toString("utf8");
}

function timingSafeEqual(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let result = 0;

  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return result === 0;
}
