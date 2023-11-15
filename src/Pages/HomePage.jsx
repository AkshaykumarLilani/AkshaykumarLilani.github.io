import React from 'react'
import NavBar from '../Components/Common/NavBar';
import HeroSection from '../Components/HomePage/HeroSection';
import AboutSection from '../Components/HomePage/AboutSection';
import SkillsSection from '../Components/HomePage/SkillsSection';

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </>
  )
}

export default HomePage;