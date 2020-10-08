import React from "react";
import { GoHome, GoStar, GoTag, GoIssueOpened } from "react-icons/go";

export default function NavBar() {
      // scss layout file

  return (
    <div className='navBar flex column'>
      <GoHome className='nav-icon'/>
      <GoStar className='nav-icon'/>
      <GoTag className='nav-icon'/>
      <GoIssueOpened className='nav-icon' />
    </div>
  );
}
