"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { loginSchema, LoginValues } from "@/app/api/v1/task/login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "@/hooks/use-user";
import { LogoIcon } from "@/components/icons";
import { Lock, User } from "lucide-react";
import { RHFTextField } from "@/components/hook-form";
import FormProvider from "@/components/hook-form/form-provider";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function LoginPageView() {
  const { toast } = useToast();
  const login = useUserLogin();

  const defaultValues = {
    userId: "",
    password: "",
  };
  const methods = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((values: LoginValues) => {
    login.mutate(values, {
      onSuccess: (data) => {
        if (data.success == true) {
          toast({
            title: "Hoşgeldiniz",
            description: "Başarıyla giriş yaptınız",
            duration: 3000,
          });
        } else {
          toast({
            title: "Giriş Başarısız",
            description: "Kimlik doğrulama hatası",
            variant: "destructive",
            duration: 3000,
          });
        }
      },
      onError: (error: any) => {
        toast({
          title: "Hata",
          description: error.response?.data?.success || "Bir hata oluştu",
          variant: "destructive",
          duration: 3000,
        });
      },
    });
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white rounded-t-3xl">
      <Card className="w-full h-full max-w-sm bg-[#f2f2f2] pt-6 pb-0">
        <div className="flex flex-col items-center px-8 py-12">
          <Image src="/logo.png" alt="Logo" width="220" height={"20"} />

          <div className="w-full space-y-6 mt-20">
            <h1 className="text-center text-2xl font-medium text-orange-400">
              LOG IN
            </h1>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <div className="space-y-4">
                <RHFTextField
                  name="userId"
                  placeholder="User ID"
                  type="text"
                  icon={<User />}
                />

                <RHFTextField
                  name="password"
                  placeholder="Password"
                  type="password"
                  icon={<Lock />}
                />
              </div>

              <div className="text-left my-4">
                <Link
                  href="/forgot-password"
                  className="text-gray-700 hover:underline text-sm"
                >
                  Forgot Password
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orange-400 hover:bg-orange-500 text-white mt-4"
              >
                Log In
              </Button>
            </FormProvider>
          </div>
        </div>
        <div className="mt-8 bg-white w-full rounded-t-3xl px-8 py-6">
          <p className="text-center text-orange-400 mb-4">Register as</p>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="bg-[#6bb2cb] hover:bg-sky-300 text-white border-none"
            >
              Operator
            </Button>
            <Button
              variant="outline"
              className="bg-[#6bb2cb] hover:bg-sky-300 text-white border-none"
            >
              Seller
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
