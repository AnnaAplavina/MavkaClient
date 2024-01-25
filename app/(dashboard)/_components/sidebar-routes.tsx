"use client";

import { BarChart, Compass, Layout, List, Newspaper, Home, Zap, PencilLine, ListMusic, Camera } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Home,
    label: "Моя страница",
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
    icon: PencilLine,
    label: "Диалоги",
    href: "/message",
  },
  {
    icon: Zap,
    label: "Рекомендации",
    href: "/inf",
  },
  {
    icon: ListMusic,
    label: "Аудио",
    href: "/audio",
  },
  {
    icon: Camera,
    label: "Видео",
    href: "/video",
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
    </div>
  )
}