"use client";

import React, { useEffect } from 'react';
import NavBar from '@/components/common/NavBar';
import HeroSection from '@/components/HomePage/HeroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import SkillsSection from '@/components/HomePage/SkillsSection';
import ProjectsSection from '@/components/HomePage/Project/ProjectsSection';
import GithubStatsSection from '@/components/HomePage/GithubStatsSection';
import Footer from '@/components/common/Footer';
import Contact from '@/components/HomePage/Contact';
import ExperienceSection from '@/components/HomePage/ExperienceSection';
import ReactGa from 'react-ga';
function HomePage() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <NavBar />
      <div className="home-page max-w-[1120px] mx-auto  flex flex-col gap-5">
        <HeroSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        <SkillsSection />
        <ProjectsSection />
        {/* <GithubStatsSection /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
