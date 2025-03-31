import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const validRoutes = ["/auth/login", "/user/profile"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (!validRoutes.includes(path)) {
    console.log("Route not found, redirecting to 404");
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  if (path === "/auth/login") {
    const token = request.cookies.get("token");

    if (token) {
      return NextResponse.redirect(new URL("/user/profile", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login"],
};
