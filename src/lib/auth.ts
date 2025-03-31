import { NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function getAuthUser(req: NextRequest) {
  try {
    const tokenCookie = req.cookies.get("token");

    if (!tokenCookie || !tokenCookie.value) return null;

    const decoded = verifyToken(tokenCookie.value);
    return decoded ? { id: decoded.userId } : null;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
}
