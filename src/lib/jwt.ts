import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY) as { userId: string };
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
