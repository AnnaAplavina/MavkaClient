import { WallPostContent, WallContent, ProgressContent } from "@/db_interfaces/interfaces";

import { NavbarRoutes } from "@/components/navbar-routes";

import { WallMobileSidebar } from "./wall-mobile-sidebar";

interface WallNavbarProps {
  wall: WallContent & {
    wall_posts: (WallPostContent & {
      userProgress: ProgressContent[] | null;
    })[];
  };
  progressCount: boolean;
};

export const WallNavbar = ({
  wall,
  progressCount,
}: WallNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <WallMobileSidebar
        wall={wall}
        progressCount={progressCount}
      />
      <NavbarRoutes />      
    </div>
  )
}