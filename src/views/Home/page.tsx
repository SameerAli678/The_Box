// src/
import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import Reputation from "@/components/sections/reputation";
import ServicesSection from "@/components/sections/services-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import Consultation from "@/components/common/consultation";
import ReasonInput from "@/components/common/input";
import ReasonSelect from "@/components/common/select-input";
import ContactFields from "@/components/sections/contact-section";

const HomeIndex = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Reputation */}
      <Reputation />

      {/* About us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      {/* <ExperienceSection /> */}

      {/* Consultation */}
      <Consultation />

      <ReasonInput />
      <ReasonSelect />
      <ContactFields />
      <div className="border mt-64 flex flex-col">
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
