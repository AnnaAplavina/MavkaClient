import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardWalls } from "@/db_methods/methods";
import { auth } from "@/app/coolAuth";
import { WallsList } from "@/components/walls-list";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { recommendedWalls, subbedWalls } = await getDashboardWalls(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <InfoCard
          icon={Clock}
          label="В рекомендованных"
          numberOfItems={recommendedWalls.length}
       />
       <InfoCard
          icon={CheckCircle}
          label="Вы подписаны на"
          numberOfItems={subbedWalls.length}
          variant="success"
       />
      </div>
      <WallsList
        items={[...recommendedWalls, ...subbedWalls]}
      />
    </div>
  )
}
