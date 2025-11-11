import React from "react";
import ServicesCard from "./services-Card";
import Construction from "../../../public/service/Construction.png";

const ServicesSection = () => {
  return (
    <div className="flex bg-[#E0E3EB] p-10">
      <ServicesCard image={Construction.src} text="Construction" blue />
      <ServicesCard image={Construction.src} text="Construction" white />
    </div>
  );
};

export default ServicesSection;
