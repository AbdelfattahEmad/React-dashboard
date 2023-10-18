import React from "react";
import "./Layout.scss"
import { Outlet } from "react-router-dom";
import logo from "../../../assets/Images/logo.png"


const AuthLayout = () => {
  return (
    <div className="Auth_Container">
      
      <header>
        <div className="Logo">
          <img src={logo} alt="Logo" />
          <p>Premium Admin & Dashboard Template</p>
        </div>
      </header>


      <div className="content">
      <Outlet />
      </div>


      <footer>
        <p>© 2023 Velzon. Crafted with & by Themesbrand</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
