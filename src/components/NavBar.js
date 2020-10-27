import React from "react";
import {
  GoHome,
  GoPerson,
  GoStar,
  GoTag,
  GoIssueOpened,
  GoCalendar,
  GoFlame,
} from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  // scss layout file

  return (
    <div className="sideNavBar flex column">
      <NavLink to="/" className=" flex align-center ">
        <GoHome className="nav-icon" />
        <span className="nav-icon-text"> Home </span>
      </NavLink>
      <NavLink to="/userProfile" className=" flex align-center ">
        <GoPerson className="nav-icon" />
        <span className="nav-icon-text"> UserPage </span>
      </NavLink>

      <NavLink to="/login" className=" flex align-center ">
        <GoStar className="nav-icon" />
        <span className="nav-icon-text"> Login </span>
      </NavLink>
      <NavLink to="/signup" className=" flex align-center ">
        <GoStar className="nav-icon" />
        <span className="nav-icon-text"> Signup </span>
      </NavLink>
      <NavLink to="rent" className=" flex align-center ">
        <GoTag className="nav-icon" />
        <span className="nav-icon-text"> For Rent </span>
      </NavLink>
      <NavLink to="services" className=" flex align-center ">
        <GoIssueOpened className="nav-icon" />
        <span className="nav-icon-text"> Local Services </span>
      </NavLink>
      <NavLink to="trends" className=" flex align-center ">
        <GoFlame className="nav-icon" />
        <span className="nav-icon-text"> Trends </span>
      </NavLink>
      <NavLink to="calendar" className=" flex align-center ">
        <GoCalendar className="nav-icon" />
        <span className="nav-icon-text"> calendar </span>
      </NavLink>
    </div>
  );
}
