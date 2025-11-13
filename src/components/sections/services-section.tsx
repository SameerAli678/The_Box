import ServicesCard from "../cards/services-Card";
import { servicesData } from "@/constant/common-data/services-data";

const ServicesSection = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 bg-[#E0E3EB] py-10 md:p-10 justify-center items-center w-full my-10">
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
  );
};

export default ServicesSection;
