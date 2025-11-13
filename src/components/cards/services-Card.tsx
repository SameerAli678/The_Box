import { serviceCardI } from "@/interfaces/service-card-interfaces";
import Image from "next/image";

const ServicesCard = ({ image, text, blue, className }: serviceCardI) => {
  return (
    <div
      className={`${
        blue ? "bg-[#2947A9] text-white" : "bg-white text-blue-800"
      } flex flex-col border py-10 px-10 md:px-20 w-[300px] md:w-[400px] gap-y-5 gap-x-0 items-center rounded-md ${className}`}
    >
      <Image src={image} alt="Image" width={80} height={100} className="" />
      <div className="flex border w-[60px] items-start text-start justify-start"></div>
      <p className="text-xl md:text-2xl">{text}</p>
    </div>
  );
};

export default ServicesCard;
// bg-[#E0E3EB]
