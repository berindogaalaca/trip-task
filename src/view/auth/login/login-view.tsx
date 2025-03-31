"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm, Controller } from "react-hook-form";
import { loginSchema, LoginValues } from "@/app/api/v1/task/login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { LogoIcon, UserIcon } from "@/components/icons";

export default function LoginPageView() {
  const { toast } = useToast();
  const login = useUserLogin();
  const router = useRouter();

  const defaultValues = {
    userId: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = (values: LoginValues) => {
    login.mutate(values, {
      onSuccess: (data) => {
        if (data.success == true) {
          console.log(data);

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
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white rounded-t-3xl">
      <Card className="w-full h-full max-w-sm bg-[#f2f2f2] pt-6 pb-0">
        <div className="flex flex-col items-center space-y-8 px-8 py-12">
          <div className="mb-4">
            <LogoIcon />
          </div>

          <div className="w-full space-y-6">
            <h1 className="text-center text-2xl font-medium text-orange-400">
              LOG IN
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <Controller
                    name="userId"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="User ID"
                        className="pl-10 bg-white shadow-sm"
                      />
                    )}
                  />
                  {errors.userId && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.userId.message}
                    </p>
                  )}
                </div>

                <div>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="bg-white shadow-sm"
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="text-left">
                <Link
                  href="/forgot-password"
                  className="text-gray-700 hover:underline text-sm"
                >
                  Forgot Password
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orange-400 hover:bg-orange-500 text-white"
              >
                Log In
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 bg-white w-full rounded-t-3xl px-8 py-6">
          <p className="text-center text-orange-400 mb-4">Register as</p>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="bg-sky-400 hover:bg-sky-500 text-white border-none"
            >
              Operator
            </Button>
            <Button
              variant="outline"
              className="bg-sky-400 hover:bg-sky-500 text-white border-none"
            >
              Seller
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
