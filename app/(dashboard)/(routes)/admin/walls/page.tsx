import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getWallsByUser } from "@/db_methods/methods";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const WallsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const walls = await getWallsByUser(userId);

  return ( 
    <div className="p-6">
      <DataTable columns={columns} data={walls} />
    </div>
   );
}
 
export default WallsPage;