import { User } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";

interface WallElementTypes {
    id: string;
    wall_name: string;
    admin_id: number;
};


export const WallElement = ({id, wall_name, admin_id}: WallElementTypes) => {
    
    return (
      <div className=" bg-white">     
        <div className={`group shadow-sm hover:shadow-md transition overflow-hidden border rounded-lg pl-3 pr-3 pt-1.5 pb-1.5 h-full border-l-4`}>
          <div className="flex flex-col h-full">
            <div className="text-base md:text-sm font-medium group-hover:text-sky-700 transition line-clamp-3"></div>
            <p className="text-xs overflow-hidden max-h-4 line-clamp-5"></p>
            <div className="mb-0 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBadge size="sm" icon={User} />
                <span>{admin_id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }