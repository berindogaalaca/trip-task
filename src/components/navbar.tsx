"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { User, Users, Package, Store } from "lucide-react";

const navItems = [
  {
    title: "Profile",
    href: "/profile",
    icon: User,
    color: "text-amber-500",
    borderColor: "border-amber-500",
  },
  {
    title: "Users",
    href: "/404",
    icon: Users,
    color: "text-gray-500",
    borderColor: "border-transparent",
  },
  {
    title: "Products",
    href: "/404",
    icon: Package,
    color: "text-gray-500",
    borderColor: "border-transparent",
  },
  {
    title: "Seller",
    href: "/404",
    icon: Store,
    color: "text-gray-500",
    borderColor: "border-transparent",
  },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="sticky top-0 z-10 w-full bg-gray-100 border-b">
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="profile"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full h-auto bg-transparent gap-1 justify-between p-0">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.title.toLowerCase()}
                className="w-full"
                onClick={() => setActiveTab(item.title.toLowerCase())}
              >
                <TabsTrigger
                  value={item.title.toLowerCase()}
                  className={cn(
                    "flex flex-row items-center justify-center gap-2 w-full py-4 rounded-none data-[state=active]:bg-transparent",
                    "border-b-2",
                    activeTab === item.title.toLowerCase()
                      ? item.borderColor
                      : "border-transparent",
                    activeTab === item.title.toLowerCase()
                      ? item.color
                      : "text-gray-500"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
