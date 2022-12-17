// import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import { SidebarData } from "./data/Data";
import logo from "../images/lo.png";
import { Profile } from "../pages/profile/Profile";

import "./Sidebar.css";

export function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="nav-menu">
      <div className="img">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        {SidebarData.map(({ path, icon, name }, index) => {
          return (
            <div>
              <NavLink
                to={path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "menuItem active" : "menuItem"
                }
              >
                {icon}
                <span>{name}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:"70px"}}>
        <Profile/>
      </div>
      </div>
    </div>
    </>
  );
}
