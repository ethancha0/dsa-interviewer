import { SESSION_COOKIE, getGoogleSession } from "@/lib/auth/google-session";
import { markUserSignedOut } from "@/lib/db/queries";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getGoogleSession();
  const response = NextResponse.redirect(new URL("/auth", request.url));

  if (session) {
    await markUserSignedOut(session.userId).catch(() => null);
  }

  response.cookies.delete(SESSION_COOKIE);

  return response;
}
