import { serviceCardI } from "@/interfaces/service-card-interfaces";
import Image from "next/image";
import Architecture from "../../../public/service/Architecture.png";
import Construction from "../../../public/service/Construction.png";
import Consultation from "../../../public/service/Consultation.png";
import Electric from "../../../public/service/Electric.png";
import Renovation from "../../../public/service/Renovation.png";
import RepairServices from "../../../public/service/Repair Services.png";

const ServicesCard = ({ image, text, blue, white }: serviceCardI) => {
  return (
    <div
      className={`${
        blue ? "bg-[#2947A9] text-white" : "bg-white text-blue-800"
      } ${
        white ? "bg-white text-blue-800" : "bg-[#2947A9] text-white"
      } flex flex-col border py-10 px-20 w-fit gap-y-5 items-center rounded-md`}
    >
      <Image src={image} alt="Image" width={80} height={100} className="" />
      <div className="flex border w-[60px] items-start text-start justify-start"></div>
      <p className="text-xl md:text-2xl">{text}</p>
    </div>
  );
};

export default ServicesCard;
// bg-[#E0E3EB]
