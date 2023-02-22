import React from "react";
import Sidebar from "./Sidebar";
import NavbarEN from "./NavbarEN";

const LayoutEN = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 p-4 text-white">
        {children}
      </div>
      <NavbarEN/>
    </div>
  );
};

export default LayoutEN;
