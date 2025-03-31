"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, FileText, Mail, BarChart2, User } from "lucide-react";
import { usePathname } from "next/navigation";

const footerItems = [
  {
    title: "Bookings",
    href: "/404",
    icon: Menu,
  },
  {
    title: "Invoice",
    href: "/404",
    icon: FileText,
  },
  {
    title: "Messages",
    href: "/404",
    icon: Mail,
  },
  {
    title: "Report",
    href: "/404",
    icon: BarChart2,
  },
  {
    title: "Profile",
    href: "/404",
    icon: User,
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 z-10 w-full bg-white border-t">
      <div className="flex justify-between items-center px-4 py-2">
        {footerItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-2",
                isActive ? "text-amber-500" : "text-gray-500"
              )}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
