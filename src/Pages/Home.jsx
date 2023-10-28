import NavBar from "../Components/NavBar";
import AboutSection from "../Components/HomePage/AboutSection";
import ContactSection from "../Components/HomePage/ContactSection";
import ProjectsSection from "../Components/HomePage/ProjectsSection";
import SkillsSection from "../Components/HomePage/SkillsSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HomePage/HeroSection";

const Home = () => {

  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
};

export default Home;
