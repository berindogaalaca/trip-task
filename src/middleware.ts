import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  console.log("Middleware path:", path);

  if (path === "/auth/login") {
    const token = request.cookies.get("token");
    console.log("Login page, token exists:", !!token);

    if (token) {
      console.log("Redirecting to home");
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login"],
};
