import React from 'react'
import NavBar from '../Components/Common/NavBar';
import HeroSection from '../Components/HomePage/HeroSection';
import AboutSection from '../Components/HomePage/AboutSection';
import SkillsSection from '../Components/HomePage/SkillsSection';
import ProjectsSection from '../Components/HomePage/Project/ProjectsSection';
import GithubStatsSection from '../Components/HomePage/GithubStatsSection';
import Footer from '../Components/Common/Footer';
import Contact from '../Components/HomePage/Contact';
import ExperienceSection from '../Components/HomePage/ExperienceSection';

function HomePage() {

  return (
    <>
      <NavBar />
      <div className='home-page'>
        <HeroSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        <SkillsSection />
        <ProjectsSection />
        <GithubStatsSection />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default HomePage;