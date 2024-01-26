import { auth } from "@/app/coolAuth";
import { redirect } from "next/navigation";
import { getUniqueWall } from "@/db_methods/methods";

import { WallSidebar } from "./_components/wall-sidebar";
import { WallNavbar } from "./_components/wall-navbar";

const WallLayout = async ({ children, params }: { children: React.ReactNode; params: { wallId: string }; }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/")
  }

  const wall = await getUniqueWall(params.wallId, userId);

  if (!wall) {
    return redirect("/");
  }

  // const progressCount = newPosts / 100;
  const progressCount = true;


  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <WallNavbar
          wall={wall}
          progressCount={progressCount}
        />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <WallSidebar
          wall={wall}
          progressCount={progressCount}
        />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">
        {children}
      </main>
    </div>
  )
}

export default WallLayout