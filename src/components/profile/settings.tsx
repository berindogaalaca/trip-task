"use client";
import { LogOut } from "lucide-react";
import EditButton from "../edit-button";
import Cookies from "js-cookie";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export default function Settings() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    sessionStorage.removeItem("user");
    router.push("/auth/login");
  };
  return (
    <>
      <Card className="relative border-amber-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              <div className="text-sm font-medium text-gray-500">
                Change password:
              </div>
              <div className="text-sm">••••••••••••</div>

              <div className="text-sm font-medium text-gray-500">
                Change mail:
              </div>
              <div className="text-sm">Hakankızıl•••••@gmail.com</div>
            </div>
          </div>
        </CardContent>
        <EditButton />
      </Card>
      <div className="flex justify-end mb-16 md:mb-0">
        <Button
          className="bg-amber-500 hover:bg-amber-600 text-white"
          onClick={() => handleLogout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </>
  );
}
