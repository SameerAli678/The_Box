import Consultation from "@/components/common/consultation";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";

const AboutUsIndex = () => {
  return (
    <div>
      {/* Hero Section  */}
      <HeroSection />

      {/* About us Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Consultation */}
      <Consultation />
    </div>
  );
};

export default AboutUsIndex;
