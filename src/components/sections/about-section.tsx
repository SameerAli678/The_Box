"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import owner from "../../../public/images/owner.png";
import { useRouter } from "next/navigation";
import { urls } from "@/router/routes";

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  const { push } = useRouter();

  return (
    <div className="flex items-center justify-center py-7 xl:pr-64">
      <div className="flex flex-col xl:relative w-fit justify-center items-center gap-y-5 p-2">
        <Image
          src={owner}
          alt="owner"
          width={800}
          height={800}
          className="flex "
        />
        <div
          className={`${
            isClient ? "client-class" : "server-class"
          } xl:absolute xl:top-13 xl:bottom-1/2 xl:-right-96 flex flex-col w-full xl:max-w-lg h-full xl:h-[500px] text-white
       bg-[#2947A9] items-start m-2 justify-between p-10`}
        >
          <h1>About Us</h1>
          <div>
            <p>
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
            </p>
            <p>
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
          </div>
          <div className="flex rounded-xl overflow-hidden">
            <button
              onClick={() => push(urls.AboutUs)}
              className="bg-white text-[#2947A9] p-3 flex rounded-2xl"
            >
              More on Our History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
