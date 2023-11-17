import React from 'react'
import NavBar from '../Components/Common/NavBar';
import HeroSection from '../Components/HomePage/HeroSection';
import AboutSection from '../Components/HomePage/AboutSection';
import SkillsSection from '../Components/HomePage/SkillsSection';
import ProjectsSection from '../Components/HomePage/ProjectsSection';
import GithubStatsSection from '../Components/HomePage/GithubStatsSection';
import Footer from '../Components/Common/Footer';
import Contact from '../Components/HomePage/Contact';

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubStatsSection />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage;