import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import {NotificationBell} from "../../../components/notification-bell";

export const Sidebar = () => {

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <Logo />
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
      <div>
        <NotificationBell />
      </div>
    </div>
  )
}