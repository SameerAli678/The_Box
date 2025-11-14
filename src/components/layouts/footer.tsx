import React from "react";
import facebook from "../../../public/icons/facebook.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import twitter from "../../../public/icons/twitter.svg";
import Link from "next/link";
import Image from "next/image";
import TheBox from "../../../public/images/TheBox.png";
import logo from "../../../public/images/logo.png";

const Footer = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-around px-3 py-10 md:py-20 md:px-20 border">
        <div className="flex flex-col w-full max-w-lg sm:gap-4">
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
          <div className="flex gap-x-3 xl:items-center">
            <p className="text-[#2947A9] text-2xl">ADDRESS:</p>
            <p className="text-[#292E3D] text-xl">
              6391 Elgin St. Celina, Delaware 10299
            </p>
          </div>
          <div className="flex gap-x-3 items-center">
            <p className="text-[#2947A9] text-2xl">PHONE:</p>
            <p className="text-[#292E3D] text-xl">+92 3102 270 338</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <p className="text-[#2947A9] text-2xl">EMAIL:</p>
            <p className="text-[#292E3D] text-xl">hello@thebox.com</p>
          </div>
        </div>
        {/* 2nd Section */}
        <div className="flex flex-col gap-y-6 w-full max-w-2xl">
          <div className="flex flex-col gap-x-3 w-full">
            <p className="text-[#2947A9] text-2xl">NEWSLETTER:</p>
            {/* EMAIL */}
            <div className="flex flex-col xl:flex-row gap-3">
              <div className="relative flex w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <svg
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 8.25v7.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 15.75v-7.5M21.75 8.25l-9.75 6-9.75-6"
                  />
                </svg>
              </div>
              <div className="flex px-14 py-2 rounded-md bg-[#2947A9] text-white text-2xl items-start justify-start w-fit">
                Send
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-3">
            <p className="text-[#2947A9] text-2xl">SOCIAL:</p>
            <div className="flex gap-3">
              <Image src={facebook} alt="facebook" width={50} height={200} />
              <Image src={linkedin} alt="linkedin" width={50} height={200} />
              <Image src={twitter} alt="twitter" width={50} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2947A9] w-full h-20 flex items-center justify-center">
        <p className="text-white  flex h-fit w-fit">
          The Box Company © 2025. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
