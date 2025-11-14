// src/
import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import Reputation from "@/components/sections/reputation";
import ServicesSection from "@/components/sections/services-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import Consultation from "@/components/common/consultation";
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

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <div className="flex my-24 w-full">
        <ProjectsSection />
      </div>
      {/* Consultation */}
      <Consultation />

      {/* Contact Us */}
      <ContactFields />
    </div>
  );
};

export default HomeIndex;
