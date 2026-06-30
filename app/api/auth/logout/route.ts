import { SESSION_COOKIE } from "@/lib/auth/google-session";
import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/auth", request.url));

  response.cookies.delete(SESSION_COOKIE);

  return response;
}
