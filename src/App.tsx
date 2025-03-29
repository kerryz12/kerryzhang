import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  Footer,
} from "./components";

// Main App Component
const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default App;
