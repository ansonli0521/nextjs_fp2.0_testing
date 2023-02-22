import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import { Dropdown } from "@nextui-org/react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  {
    id: 1, label: "Home", icon: HomeIcon, link: "/", submenu: [
      { id: 1, label: "Company Profile", icon: HomeIcon, link: "/users" },
      { id: 2, label: "Bank Account Record", icon: ArticleIcon, link: "/tutorials" },
    ]
  },
  {
    id: 2, label: "Company", icon: ArticleIcon, link: "/company/profile", submenu: [
      { id: 1, label: "Company Profile", icon: HomeIcon, link: "/company/profile" },
      { id: 2, label: "Bank Account Record", icon: ArticleIcon, link: "/company/bar" },
    ]
  },
  { id: 3, label: "form", icon: UsersIcon, link: "/form" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen z-10 px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>

                <a className="flex py-4 px-3 items-center w-full h-full">
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={classNames(
                        "text-md font-medium text-text-light"
                      )}
                    >
                      <Dropdown closeOnSelect={false}>
                        <Dropdown.Button flat>{menu.label}</Dropdown.Button>
                        <Dropdown.Menu aria-label="Static Actions">
                          <Dropdown.Item key="new"><Link href={menu.link}>1home</Link></Dropdown.Item>
                          <Dropdown.Item key="copy"><Link href={menu.link}>2profile</Link></Dropdown.Item>
                          <Dropdown.Item key="edit"><Link href={menu.link}>3form</Link></Dropdown.Item>
                          <Dropdown.Item key="delete">
                            <div>
                              <Dropdown>
                                <Dropdown.Button flat>nest</Dropdown.Button>
                                <Dropdown.Menu aria-label="nest">
                                  <Dropdown.Item key="copy">submenu.label</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                  )}
                </a>

              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
