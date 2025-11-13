import Image from "next/image";
import React from "react";
import kitchen from "../../../public/images/kitchen.png";

const Consultation = () => {
  return (
    <div className="relative flex items-center justify-center my-20">
      <Image
        src={kitchen}
        alt="kitchen"
        width={1000}
        height={1000}
        className="absolute flex w-full h-full md:h-[300px] -z-20 my- justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex flex-col md:flex-row p-4 text-white items-center md:justify-evenly justify-center w-full">
        <div>
          <p className="flex text-2xl md:text-5xl">
            Free consultation with exceptional quality
          </p>
          <p className="flex text-lg md:text-xl">
            Just one call away: +84 1102 2703
          </p>
        </div>
        <div className="flex border border-white px-5 py-6 w-fit text-lg md:text-xl h-fit">
          Get your consultation
        </div>
      </div>
    </div>
  );
};

export default Consultation;
