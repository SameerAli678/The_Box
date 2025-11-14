// src/components/common/navbar.tsx
"use client";
import Image from "next/image";
import TheBox from "../../../public/images/TheBox.png";
import logo from "../../../public/images/logo.png";
import sidebarOpen from "../../../public/images/sidebaropen.png";
import { navbarData } from "@/constant/common-data/navbar-data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sidebar";

const Navbar = () => {
  // state for sidebar
  const [isOpen, setIsOpen] = useState(false);
  // get current path name
  const pathName = usePathname();
  return (
    <div>
      <nav className="d-flex justify-content-around align-items-center shadow-sm px-4 py-3 fixed-top z-500 bg-white w-100">
        {/* logo */}
        <div className="d-flex align-items-center w-fit-content">
          <Link
            className="d-flex align-items-center gap-2 w-fit-content cursor-pointer"
            href="/"
          >
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="d-flex align-items-center w-100"
            />
            <Image
              src={TheBox}
              alt="Logo"
              width={100}
              height={30}
              className="d-flex align-items-center w-100"
            />
          </Link>
        </div>
        {/* Pages Menu */}
        <div className="d-none d-md-flex">
          <ul className="d-flex gap-4 list-unstyled m-0 p-0">
            {navbarData.map((link) => (
              <li key={link.path} className="">
                <a
                  className={`nav-link ${
                    pathName === link.path
                      ? "text-warning border-bottom border-warning"
                      : ""
                  }`}
                  href={link.path}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Side Open */}
        <div className="cursor-pointer d-md-none d-flex">
          <Image
            src={sidebarOpen}
            alt="sidebarOpen"
            width={40}
            height={50}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
      {/* Sidebar Component */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
