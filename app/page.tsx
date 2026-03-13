import AboutSection from "./components/sections/AboutSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";


export default function Home() {
  return (
    <div className="relative w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CapabilitiesSection />
      {/* Other sections will go here */}
    </div>
  );
}