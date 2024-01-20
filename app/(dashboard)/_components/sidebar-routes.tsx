"use client";

import { BarChart, Compass, Layout, List, Newspaper, Home, CalendarRange, Info } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Home,
    label: "Главная",
    href: "/",
  },
  {
    icon: Newspaper,
    label: "Новости",
    href: "/news",
  },
  {
    icon: Layout,
    label: "Мои стенки",
    href: "/walls",
  },
  {
    icon: Compass,
    label: "Поиск",
    href: "/search",
  },
  {
    icon: Compass,
    label: "InfScroll",
    href: "/inf",
  }
];

const adminRoutes = [
  {
    icon: List,
    label: "Walls",
    href: "/admin/walls",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/admin/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/admin");

  const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
      <a
        href="https://sovcombank.ru/about/info"
        target="_blank"
        className={cn(
          "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20"
      )}>
        <div className="flex items-center gap-x-2 py-4">
          <Info
            size={22}
            className={cn(
              "text-slate-500"
            )}
          />
          Об организации
        </div>
        <div
          className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all"
          )}
        />
      </a>
    </div>
  )
}