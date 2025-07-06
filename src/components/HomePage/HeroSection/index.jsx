"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { calculateSumOfExperiences } from '@/lib/dateUtils';
import { experiences } from '@/lib/data/experiences';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';
import useMediaQuery from '@/lib/hooks/use-media-query';

function HeroSection() {
    const summedExperience = useMemo(() => calculateSumOfExperiences([experiences[0], experiences[1], experiences[3]]), []);
    const heroBio = `With nearly ${summedExperience.totalYears + 1} years of experience as a Full Stack Developer, currently contributing as a Sr. Software Engineer at Teson LLP, I specialize in building high-performance, scalable web applications. My expertise is centered around Python (Django/REST Framework) for robust back-end development, and modern JavaScript frameworks (Next.js, React.js) for dynamic front-end solutions. I'm proficient in leveraging PostgreSQL for database management and Docker for containerization, with a strong focus on API integration and delivering solutions that enhance user experience and meet key business objectives.`;

    const conciseHeroBio = `
    A Senior Full Stack Engineer specializing in Django/Next.js/React, I build scalable web applications. My work has significantly optimized performance (e.g., APIs 22x faster, 98% page load reduction) and streamlined operations through automation, including leading complex migrations for 10+ year platforms.
`;

    const sharedProps = { heroBio, conciseHeroBio, summedExperience };

    // Tailwind's 'md' breakpoint is 768px
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return isDesktop ? <HeroDesktop {...sharedProps} /> : <HeroMobile {...sharedProps} />;
}

export default HeroSection;