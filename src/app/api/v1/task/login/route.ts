import { ApiResponse } from "@/lib/api-response";
import { loginSchema } from "./schema";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();

    const validationResult = loginSchema.safeParse(user);

    if (!validationResult.success) {
      console.error("Validation Error:", validationResult.error);
      return ApiResponse.error(
        "Geçersiz veri formatı",
        validationResult.error.errors
      );
    }

    const requiredFields = ["userId", "password"];

    const missingFields = requiredFields.filter(
      (field) => user[field] === undefined || user[field] === null
    );

    if (missingFields.length > 0) {
      return ApiResponse.error(
        `Eksik Parametreler: ${missingFields.join(", ")}`,
        missingFields
      );
    }

    const { userId, password } = validationResult.data;

    const userLogin = await prisma.user.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!userLogin) {
      return ApiResponse.error("Kullanıcı bulunamadı", null, 404);
    }

    const passwordMatch = await compare(password, userLogin.password);

    if (!passwordMatch) {
      return ApiResponse.error("Geçersiz şifre", null);
    }
    const { password: _, ...userWithoutPassword } = userLogin;

    const token = sign(
      {
        userId: userLogin.userId,
      },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    return ApiResponse.success("Giriş başarılı", {
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error("Login hatası:", {
      error,
      stack: error instanceof Error ? error.stack : undefined,
      details: error instanceof Error ? error : undefined,
    });
    return ApiResponse.error(
      "Giriş yaparken bir hata oluştu",
      error instanceof Error ? error.message : String(error)
    );
  }
}
