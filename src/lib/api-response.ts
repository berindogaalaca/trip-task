import { NextResponse } from "next/server";

export class ApiResponse {
  static success(message: string, data: any = null, status = 200) {
    return NextResponse.json(
      {
        success: true,
        message,
        data,
      },
      { status }
    );
  }

  static error(message: string, errors?: any, status = 400) {
    return NextResponse.json(
      {
        success: false,
        message,
        errors,
      },
      { status }
    );
  }
}
