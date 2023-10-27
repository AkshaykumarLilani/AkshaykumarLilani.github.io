import NavBar from "../Components/NavBar";
import AboutSection from "../Components/HomePage/AboutSection";
import ContactSection from "../Components/HomePage/ContactSection";
import ProjectsSection from "../Components/HomePage/ProjectsSection";
import SkillsSection from "../Components/HomePage/SkillsSection";
import Footer from "../Components/Footer";

const Home = () => {

  return (
    <>
      <div>
        <NavBar />
        <AboutSection />
        <ContactSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </div>
    </>
  )
};

export default Home;
