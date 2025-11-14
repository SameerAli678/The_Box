import ServicesCard from "../cards/services-Card";
import { servicesData } from "@/constant/common-data/services-data";

const ServicesSection = () => {
  return (
    <div className="flex flex-col bg-[#E0E3EB] items-center justify-center p-4 my-10">
      <p className="text-4xl pt-3">Services</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 bg-[#E0E3EB] md:px-10 justify-center items-center w-full">
        {servicesData.map((services, i) => (
          <div key={i} className="flex justify-center items-center py-3 md:p-6">
            <ServicesCard
              image={services.img}
              text={services.text}
              blue={services.blue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
