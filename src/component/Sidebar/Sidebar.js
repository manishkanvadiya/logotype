// Sidebar.js
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ai_img from "../../assets/img/ai_img.svg";
import dashboard_icon from "../../assets/img/dashboard_icon.svg";
import ai_icon from "../../assets/img/Ai Icon.svg";
import Integrations from "../../assets/img/Integrations.svg";
import box from "../../assets/img/project.svg";
import Documents from "../../assets/img/Documents.svg";
import logout from "../../assets/img/logout.svg";
import { googleLogout } from "@react-oauth/google";
import { clearDataSignUp } from "../../redux/signupSlice";
import { clearDataOtp } from "../../redux/OtpSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigation = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logoutClick = () => {
    googleLogout();
    clearDataSignUp();
    clearDataOtp();
    navigation("/");
  };

  return (
    <div className="my-3">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top-section">
          <h1 className="logo">
            <img src={ai_img} alt="ai_img" />
            Logotype
          </h1>
          {/* <div className="bars" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div> */}
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink to="/Dashboard" activeClassName="active">
                <img src={dashboard_icon} alt="dashboard_icon" />{" "}
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/YourAi" activeClassName="active">
                <img src={ai_icon} alt="ai_icon" /> <span>Your AI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Integrations" activeClassName="active">
                <img src={Integrations} alt="Integrations" />{" "}
                <span>Integrations</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Project" activeClassName="active">
                <img src={box} alt="box" /> <span>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Documents" activeClassName="active">
                <img src={Documents} alt="Documents" /> <span>Documents</span>
              </NavLink>
            </li>
            <li className="logout">
              <div onClick={() => logoutClick()} className="logout_div">
                <img src={logout} alt="logout" /> <span>Logout</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
