// src/
import AboutSection from "@/components/common/about-section";
import HeroSection from "@/components/common/hero-section";
import Reputation from "@/components/common/reputation";
import ServicesCard from "@/components/common/services-Card";
import Construction from "../../../public/service/Construction.png";
import ServicesSection from "@/components/common/services-section";

const HomeIndex = () => {
  return (
    <div>
      <HeroSection />
      {/* Our Reputation */}
      <Reputation />
      <AboutSection />
      <ServicesSection />
      {/* <ServicesCard image={Construction.src} text="Construction" /> */}
      <div className="border mt-64 flex">
        <p className="text-primary">Blue</p>
        <p className="text-secondary">Gray</p>
        <p className="text-success">Green</p>
        <p className="text-danger">Red</p>
        <p className="text-warning">Orange</p>
        <p className="text-info">Light Blue</p>
        <p className="text-light bg-dark">White</p>
        <p className="text-dark">Black / Dark Gray</p>
        <p className="text-body">Default Text Color</p>
        <p className="text-muted">Gray (Muted)</p>
        <p className="text-white bg-dark">White</p>
        <p className="text-black-50">Black 50%</p>
        <p className="text-white-50 bg-dark">White 50%</p>
      </div>
    </div>
  );
};

export default HomeIndex;
