import Image from "next/image";
import React from "react";
import owner from "../../../public/images/owner.png";

const AboutSection = () => {
  return (
    <div className="">
      <Image src={owner} alt="owner" width={700} height={500} />
      <div className="position-absolute d-flex flex-column bg-primary w-25 h- border text-light">
        <h1 className="fw-bold">About Us</h1>
        <p>
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
        </p>
        <p>
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </p>
        <a href="/about-us" className="bg-Light p-3 text-light border w-50 justify-content-center">
          More on Our History
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
