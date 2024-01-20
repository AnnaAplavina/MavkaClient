import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardWalls } from "@/actions/get-recommended";
import { WallsList } from "@/components/walls-list";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedWalls,
    wallsInProgress
  } = await getDashboardWalls(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={wallsInProgress.length}
       />
       <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedWalls.length}
          variant="success"
       />
      </div>
      <WallsList
        items={[...wallsInProgress, ...completedWalls]}
      />
    </div>
  )
}
