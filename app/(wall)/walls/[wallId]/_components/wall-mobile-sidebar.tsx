import { Menu } from "lucide-react";
import { WallContent, WallPostContent, ProgressContent } from "@/db_interfaces/interfaces";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { WallSidebar } from "./wall-sidebar";

interface WallMobileSidebarProps {
  wall: WallContent & {
    wall_posts: (WallPostContent & {
      userProgress: ProgressContent[] | null;
    })[];
  };
  progressCount: boolean;
};

export const WallMobileSidebar = ({ 
  wall,
  progressCount,
}: WallMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <WallSidebar
          wall={wall}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}