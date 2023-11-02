import React, { useTransition } from "react";
import Sidebar from "../Components/Sidebar/sidebar";
import Topbar from "../Components/Topbar/Topbar";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const DashboardLayout = () => {

  const { sideMenuCollapsed } = useSelector((state) => state.uiState);

  const {t}=useTranslation()

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

        <footer className="Footer">
          <h5>{t("Contact us")}</h5>

          <div className="Social_media">
            <p>face Book </p>
            <p>Whatsaap </p>
            <p>Twiiter </p>
            <p>instgram</p>
          </div>

          
        </footer>

        
      </div>
    </div>
    </div>  

  );
};

export default DashboardLayout;
