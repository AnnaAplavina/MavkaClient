"use client";

import { auth } from "@/app/coolAuth";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/admin";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = auth();
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isWallPage = pathname?.includes("/walls");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isWallPage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isAdmin(userId) ? (
          <Link href="/admin/walls">
            <Button size="sm" variant="ghost">
              Admin mode
            </Button>
          </Link>
        ) : null}
        {/* <UserButton
          afterSignOutUrl="/"
        /> */}
      </div>
    </>
  )
}