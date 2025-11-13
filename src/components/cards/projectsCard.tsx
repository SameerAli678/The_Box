import { projectCardI } from "@/interfaces/project-Cards-Interfaces";
import Image from "next/image";

const ProjectsCard = ({
  image,
  text,
  description,
  className,
}: projectCardI) => {
  return (
    <div className={`${className}`}>
      <Image src={image} alt="image" width={400} height={400} />
      <div className="flex flex-col bg-[#2947A9] w-full max-w-[400px] text-white px-3 pt-3">
        <p className="flex text-2xl font-semibold">{text}</p>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
