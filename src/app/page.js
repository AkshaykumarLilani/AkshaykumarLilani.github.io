"use client";

import React, { useEffect, useLayoutEffect, useState } from 'react';
import NavBar from '@/components/common/NavBar';
import HeroSection from '@/components/HomePage/HeroSection/index';
import AboutSection from '@/components/HomePage/AboutSection';
import SkillsSection from '@/components/HomePage/SkillsSection';
import ProjectsSection from '@/components/HomePage/Project/ProjectsSection';
import GithubStatsSection from '@/components/HomePage/GithubStatsSection';
import Footer from '@/components/common/Footer';
import Contact from '@/components/HomePage/Contact';
import ExperienceSection from '@/components/HomePage/ExperienceSection';
import ReactGa from 'react-ga';
import LoadingHome from './loading';


function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (isClient) {
      ReactGa.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
      ReactGa.pageview(window.location.pathname);
    }
  }, [isClient]);

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingHome />; // or a skeleton loader
  }

  return (
    <>
      <NavBar />
      <div className="home-page max-w-[1120px] mx-auto flex flex-col gap-5 md:pt-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
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
