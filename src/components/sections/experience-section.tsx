import Image from "next/image";
import React from "react";
import clients from "../../../public/images/clients.png";
import projects from "../../../public/images/projects.png";
import Awards from "../../../public/images/Awards.png";
import business from "../../../public/images/business.png";

const ExperienceSection = () => {
  return (
    <div>
      <div className="relative flex p-10 gap-20 border ">
        {/* Happy Clients */}
        <div className="absolute">
          <div className="relative flex flex-col w-full max-w-[280px] p-3 shadow-2xl rounded-lg">
            <div className="absolute -top-8 -right-10">
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
        <div className="absolute">
          <div className="relative flex flex-col w-full max-w-[330px] p-7 shadow-2xl rounded-lg">
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
        <div className="absolute">
          <div className="relative flex flex-col w-full max-w-[330px] p-7 shadow-2xl rounded-lg">
            <div className="absolute -top-4 -right-2">
              <Image src={Awards} alt="Awards" width={100} height={100} />
            </div>
            <p className="flex text-7xl">37</p>
            <div className="flex gap-x-2 pl-3">
              <div className="flex border-2 border-amber-600 bg-amber-600 w-1 h-8"></div>
              <p className="text-[#667299] flex text-2xl">Awards Win</p>
            </div>
          </div>
        </div>
        {/* Years in Business */}
        <div className="absolute">
          <div className="relative flex flex-col w-full max-w-[330px] p-7 shadow-2xl rounded-lg">
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
    </div>
  );
};

export default ExperienceSection;
