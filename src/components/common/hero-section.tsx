import Image from "next/image";
import React from "react";
import Hero from "../../../public/images/Hero.png";

const HeroSection = () => {
  return (
    <div>
      <div className="position-relative d-flex">
        <Image
          src={Hero}
          alt="Hero Section"
          width={1000}
          height={500}
          className="d-flex w-screen h-[500px]"
        />
        <h1
          style={{
            // position: "absolute",
            top: "150px",
            bottom: "10px",
            left: "40px",
            right: "30px",
            width: "fit-content",
            height: "fit-content",
          }}
          className="d-flex position-absolute display-3 fw-semibold text-center text-dark"
        >
          Building things is our mission.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
