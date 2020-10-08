import React from "react";
import { GiModernCity } from "react-icons/gi";

export default function Header() {
  // scss layout file
  return (
    <div className="main-header flex  ">
      <div className="logo-container flex base-line">
        <GiModernCity className="logo-icon" />
        ProxiMate
      </div>
    </div>
  );
}
