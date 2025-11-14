import Image from "next/image";
import React from "react";
import clients from "../../../public/images/clients.png";
import projects from "../../../public/images/projects.png";
import Awards from "../../../public/images/Awards.png";
import business from "../../../public/images/business.png";

const ExperienceSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-evenly w-full my-6">
      {/* 1st Section */}
      <div className="relative flex flex-col p-10 gap-20 w-full max-w-xl md:h-[750px] items-center justify-center text-center">
        {/* Happy Clients */}
        <div className="md:absolute top-13 right-10 z-10">
          <div className="relative flex flex-wrap w-full max-w-[280px] p-3 shadow-2xl bg-white rounded-lg">
            <div className="absolute -top-14 -right-10">
              <Image src={clients} alt="Clients" width={100} height={100} />
            </div>
            <p className="flex text-7xl">84</p>
            <div className="flex gap-x-2 pl-3">
              <div className="flex border-2 border-amber-600 bg-amber-600 w-1 h-8"></div>
              <p className="text-[#667299] flex text-2xl">Happy Clients</p>
            </div>
          </div>
        </div>
        {/* Projects Completed */}
        <div className="md:absolute top-48 right-52 -z-50">
          <div className="relative flex flex-wrap w-full max-w-[330px] p-7 shadow-lg bg-white rounded-lg">
            <div className="absolute -top-8 -left-10">
              <Image src={projects} alt="Projects" width={100} height={100} />
            </div>
            <p className="flex text-7xl">123</p>
            <div className="flex gap-x-2 pl-3">
              <div className="flex border-2 border-amber-600 bg-amber-600 w-1 h-8"></div>
              <p className="text-[#667299] flex text-2xl">Projects Completed</p>
            </div>
          </div>
        </div>
        {/* Awards Win */}
        <div className="md:absolute top-[350px] right-10 z-50">
          <div className="relative flex flex-col w-full max-w-[330px] p-7 shadow-2xl bg-white rounded-lg">
            <div className="absolute -top-10 -right-10">
              <Image src={Awards} alt="Awards" width={100} height={100} />
            </div>
            <p className="flex text-7xl">37</p>
            <div className="flex gap-x-2 pl-3">
              <div className="flex border-2 border-amber-600 bg-amber-600 w-1 h-8"></div>
              <p className="text-[#667299] flex text-2xl">Awards Wons</p>
            </div>
          </div>
        </div>
        {/* Years in Business */}
        <div className="md:absolute top-[500px] right-52 -z-50">
          <div className="relative flex flex-wrap w-full max-w-[330px] p-7 shadow-xl bg-white rounded-lg">
            <div className="absolute -bottom-7 -right-10">
              <Image src={business} alt="business" width={100} height={100} />
            </div>
            <p className="flex text-7xl">30</p>
            <div className="flex gap-x-2 pl-3">
              <div className="flex border-2 border-amber-600 bg-amber-600 w-1 h-8"></div>
              <p className="text-[#667299] flex text-2xl">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd Section */}
      <div className="flex flex-col w-full h-full max-w-md gap-y-9 p-3">
        <p className="flex text-5xl text-[#2947A9] font-bold">
          30 Years <br />
          Experience
        </p>
        <p className="flex text-[#525B7A] md:text-xl">
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        {/* Button */}
        <a
          href="/contact-us"
          className="flex px-14 py-3 bg-[#2947A9] text-white text-2xl w-fit !no-underline"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ExperienceSection;
