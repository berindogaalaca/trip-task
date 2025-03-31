import { z } from "zod";

export const loginSchema = z.object({
  userId: z.string().min(1, "Lütfen geçerli bir userId giriniz"),
  password: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır"),
});

export type LoginValues = z.infer<typeof loginSchema>;
