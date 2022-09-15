import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import React from "react";

function Sidebar(){
  return(
    <div className="sidebar-left">
        <SidebarLink text="Home" />
        <SidebarLink text="Explore" />
        <SidebarLink text="Notifications" />
        <SidebarLink text="Messages" />
        <SidebarLink text="Bookmarks" />
        <SidebarLink text="Lists" />
        <SidebarLink text="Profile" />
        <SidebarLink text="More" />
    </div>
  );
}

export default Sidebar;