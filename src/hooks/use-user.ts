import { useMutation } from "@tanstack/react-query";
import { LoginValues } from "@/app/api/v1/task/login/schema";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { endpoints } from "@/utils/axios";

export const useUserLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (params: LoginValues) => {
      const { data } = await axiosInstance.post(endpoints.login, params);
      return data;
    },
    onSuccess: (data) => {
      if (data.success) {
        console.log("Token created:", data.data.token);
        console.log("Setting cookie with expires:", 7);
        if (data.data?.token) {
          Cookies.set("token", data.data.token, {
            expires: 7,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
        }
        console.log("Cookie after setting:", Cookies.get("token"));
        setTimeout(() => {
          console.log("Cookie after 2 seconds:", Cookies.get("token"));
        }, 2000);
        if (data.data?.user) {
          sessionStorage.setItem("user", JSON.stringify(data.data.user));
        }

        router.push("/");
      }
    },
  });
};
