import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Lütfen geçerli bir e-posta adresi giriniz"),
  password: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır"),
});

export type LoginValues = z.infer<typeof loginSchema>;
