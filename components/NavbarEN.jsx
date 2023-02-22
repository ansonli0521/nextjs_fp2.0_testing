import React from "react";
import classNames from "classnames";
import Image from "next/image";

const NavbarEN = () => {
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-0 px-4 shadow-sm h-16": true, //positioning & styling
      })}
    >
      <div className="flex gap-4 items-center">
          <Image
            src={
              "https://u01-backoffice.fundpark.online/img/full-name-logo.svg"
            }
            height={100}
            width={200}
            alt="profile image"
            className="rounded"
          />
      </div>
      <div className="flex-grow"></div>
      <h1>Fundpark2.0 Testing</h1>
    </nav>
  );
};

export default NavbarEN;
