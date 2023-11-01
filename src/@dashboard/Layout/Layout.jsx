import React from "react";
import Sidebar from "../Components/Sidebar/sidebar";
import Topbar from "../Components/Topbar/Topbar";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardLayout = () => {

  const { sideMenuCollapsed } = useSelector((state) => state.uiState);

  return (

    <div className={(sideMenuCollapsed ? "Collapsed" : "" )}> 

    <div className="Layout_Container" >
      
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
    </div>  

  );
};

export default DashboardLayout;
