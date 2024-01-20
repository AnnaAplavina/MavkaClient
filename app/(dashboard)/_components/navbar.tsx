"use client"

import { NavbarRoutes } from "@/components/navbar-routes"

import { MobileSidebar } from "./mobile-sidebar"

import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname();
  let pageTitle = "Главная"

  if (pathname === '/news') {
    pageTitle = 'Новости';
  } else if (pathname === '/') {
    pageTitle = 'Главная';
  } else if (pathname === '/socials') {
    pageTitle = 'Группы';
  } else if (pathname === '/my') {
    pageTitle = 'Моя страница';
  } else if (pathname === '/audio') {
    pageTitle = 'Аудио';
  } else if (pathname === '/video') {
    pageTitle = 'Видео';
  }

  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <p className="text-md md:text-lg pr-5">{pageTitle}</p>
      <NavbarRoutes />
    </div>
  )
}