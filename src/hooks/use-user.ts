import { useMutation, useQuery } from "@tanstack/react-query";
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
        if (data.data?.token) {
          Cookies.set("token", data.data.token, {
            expires: 7,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
        }
        if (data.data?.user) {
          sessionStorage.setItem("user", JSON.stringify(data.data.user));
        }

        router.push("/user/profile");
      }
    },
  });
};

export const useBankDetail = () => {
  return useQuery({
    queryKey: ["bankDetail"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoints.bankDetail);
      return data;
    },
  });
};

export const useCompany = () => {
  return useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoints.companyDetail);
      return data;
    },
  });
};

export const useContactDetail = () => {
  return useQuery({
    queryKey: ["contactDetail"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoints.contactDetail);
      return data;
    },
  });
};
