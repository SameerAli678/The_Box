// src
import { projectsData } from "@/constant/common-data/projects-data";
import ProjectsCard from "../cards/projectsCard";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col bg-[#E0E3EB] md:py-10 md:p-10">
      <h1 className="flex pl-10 2xl:pl-14 px-10 py-10"> All Projects</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center items-center w-full md:my-10 px-4">
        {projectsData.map((projects, i) => (
          <div key={i} className="flex justify-center items-center py-3 md:p-6">
            <ProjectsCard
              image={projects.img}
              text={projects.text}
              description={projects.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
