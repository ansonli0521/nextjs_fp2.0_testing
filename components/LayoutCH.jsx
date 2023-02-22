import React from "react";
import Sidebar from "./Sidebar";
import NavbarCH from "./NavbarCH";

const LayoutCH = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 p-4 text-white">
        {children}
      </div>
      <NavbarCH/>
    </div>
  );
};

export default LayoutCH;
