import { NextResponse, type NextRequest } from "next/server";

const allowedOrigins = new Set([
  "https://leetcode.com",
  "https://neetcode.io",
  "https://www.neetcode.io",
]);

const corsHeaders = {
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
};

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const origin = request.headers.get("origin");
  const responseOrigin =
    origin && allowedOrigins.has(origin) ? origin : "https://leetcode.com";

  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      headers: {
        ...corsHeaders,
        "Access-Control-Allow-Origin": responseOrigin,
      },
      status: 204,
    });
  }

  const response = NextResponse.next();

  for (const [key, value] of Object.entries(corsHeaders)) {
    response.headers.set(key, value);
  }

  response.headers.set("Access-Control-Allow-Origin", responseOrigin);

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
