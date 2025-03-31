"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FormProvider from "@/components/hook-form/form-provider";
import RHFTextField from "@/components/hook-form/rhf-text-field";
import { useToast } from "@/hooks/use-toast";
import { User } from "@/types/user";
import { useForm } from "react-hook-form";
import { loginSchema, LoginValues } from "@/app/api/v1/task/login/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPageView() {
  const { toast } = useToast();

  const defaultValues: Omit<User, "id" | "createdAt" | "updatedAt"> = {
    user_id: "",
    password: "",
  };
  const methods = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((values) => {
    toast({
      title: "Hoesgeldiniz",
      variant: "destructive",
      duration: 3000,
    });
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white rounded-t-3xl">
      <Card className="w-full h-full max-w-sm bg-[#f2f2f2] pt-6 pb-0">
        <div className="flex flex-col items-center space-y-8 px-8 py-12">
          <div className="mb-4">
            <OrcaLogo />
          </div>

          <div className="w-full space-y-6">
            <h1 className="text-center text-2xl font-medium text-orange-400">
              LOG IN
            </h1>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-6">
                <RHFTextField name="first_name" placeholder="User ID" />
                <RHFTextField name="last_name" placeholder="Password" />
              </div>
            </FormProvider>

            <div className="text-left">
              <Link
                href="/forgot-password"
                className="text-gray-700 hover:underline text-sm"
              >
                Forgot Password
              </Link>
            </div>

            <Button className="w-full h-12 bg-orange-400 hover:bg-orange-500 text-white">
              Log In
            </Button>
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

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function OrcaLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-16 w-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold">
            <span className="text-sky-400">ORCA</span>
          </span>
        </div>
        <div className="absolute left-8 top-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z"
              fill="#666666"
            />
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="#666666"
            />
          </svg>
        </div>
        <div className="absolute right-8 top-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#666666"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute top-10 w-full text-center">
          <span className="text-orange-400 text-sm">Softwares</span>
        </div>
      </div>
    </div>
  );
}
