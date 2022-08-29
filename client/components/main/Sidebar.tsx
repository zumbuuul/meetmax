import { NextPage } from "next";
import SidebarButton from "./sidebar/SidebarButton";

const Sidebar: NextPage = () => {
  return (
    <div className="w-[15vw] sticky top-[5rem] left-0 hidden laptop:flex laptop:justify-end h-[100vh]">
      <div className="w-11/12  ">
        <SidebarButton
          iconpath="Home"
          buttontext="Feed"
          route={"/" || "post"}
        ></SidebarButton>
        <SidebarButton
          iconpath="Community"
          buttontext="My Community"
          route="/my-community"
        ></SidebarButton>
        <SidebarButton
          iconpath="Message"
          buttontext="Messages"
          route="/messages"
        ></SidebarButton>
        <SidebarButton
          iconpath="Notification"
          buttontext="Notifications"
          route="/notifications"
        ></SidebarButton>
        <SidebarButton
          iconpath="Explore"
          buttontext="Explore"
          route="/explore"
        ></SidebarButton>
        <SidebarButton
          iconpath="User"
          buttontext="Profile"
          route="/profile"
        ></SidebarButton>
        <SidebarButton
          iconpath="Setting"
          buttontext="Settings"
          route="/settings"
        ></SidebarButton>
        <SidebarButton
          iconpath="Log Out"
          buttontext="Logout"
          route="/logout"
        ></SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
