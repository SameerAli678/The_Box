// src/components/common/sidebar.tsx
import { navbarData } from "@/constant/common-data/navbar-data";
import { NavbarProps } from "@/interfaces/sidebar-interfaces";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar: React.FC<NavbarProps> = ({ isOpen }) => {
  // get current path name
  const pathName = usePathname();
  // if sidebar is not open, return null
  if (!isOpen) return null;

  return (
    <div
      style={{ marginTop: "75px" }}
      className="d-flex flex-row bg-white p-3 shadow-sm position-absolute top-5 w-75 h-75 z-3 d-md-none fixed-sidebar"
    >
      {/* SideBar Menu */}
      <ul className="d-flex flex-column gap-4 list-unstyled m-0 p-0 w-100">
        {navbarData.map((link) => (
          <li key={link.path} className="d-flex flex-column  w-fit-content">
            <a
              className={`nav-link ${
                pathName === link.path
                  ? "d-flex text-warning border-bottom border-warning w-fit-content"
                  : " w-fit-content"
              }`}
              href={link.path}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
