"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { calculateSumOfExperiences } from '@/lib/dateUtils';
import { experiences } from '@/lib/data/experiences';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';
import useMediaQuery from '@/lib/hooks/use-media-query';

function HeroSection() {
    const summedExperience = useMemo(() => calculateSumOfExperiences([experiences[0], experiences[1]]), []);
    const allSummedExperience = useMemo(() => calculateSumOfExperiences([...experiences]), [])
    const heroBio = `With ${allSummedExperience.totalYears} years of IT and nearly ${summedExperience.totalYears + 1} years of Full Stack Developer experience, last contributing as a Sr. Software Engineer at Teson LLP, I specialize in building high-performance, scalable web applications. My expertise is centered around Python (Django/REST Framework) for robust back-end development, and modern JavaScript frameworks (Next.js, React.js) for dynamic front-end solutions. I'm proficient in leveraging PostgreSQL for database management and Docker for containerization, with a strong focus on API integration and delivering solutions that enhance user experience and meet key business objectives.`;

    const conciseHeroBio = `
    Senior Full Stack Engineer with expertise in Django, Next.js, and React, experienced in building scalable web applications. Improved API performance by up to 22x, cut page load times by 98%, automated operational workflows, and led complex migrations for platforms with over a decade of legacy data.
`;

    const sharedProps = { heroBio, conciseHeroBio, summedExperience };

    // Tailwind's 'md' breakpoint is 768px
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return isDesktop ? <HeroDesktop {...sharedProps} /> : <HeroMobile {...sharedProps} />;
}

export default HeroSection;