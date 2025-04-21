"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bell, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      icon: Home,
      label: "ホーム"
    },
    {
      href: "/search",
      icon: Search,
      label: "検索"
    },
    {
      href: "/notifications",
      icon: Bell,
      label: "通知"
    },
    {
      href: "/messages",
      icon: Mail,
      label: "メッセージ"
    },
    {
      href: "/profile",
      icon: User,
      label: "プロフィール"
    }
  ];

  return (
    <nav className="flex w-full h-14 items-center px-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center h-full",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-[0.7rem] leading-none mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
} 