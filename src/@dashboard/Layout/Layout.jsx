import React from "react";
import Sidebar from "../Components/Sidebar/sidebar";
import Topbar from "../Components/Topbar/Topbar";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="Layout_Container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <div className="Content_Container">
        <div className="Topabar">
          <Topbar />
        </div>

        <div className="Content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
