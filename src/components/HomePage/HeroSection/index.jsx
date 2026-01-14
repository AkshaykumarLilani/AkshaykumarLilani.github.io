"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { calculateSumOfExperiences } from '@/lib/dateUtils';
import { experiences } from '@/lib/data/experiences';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';
import useMediaQuery from '@/lib/hooks/use-media-query';

function HeroSection() {
    const summedExperience = useMemo(() => calculateSumOfExperiences([experiences[0], experiences[1], experiences[2]]), []);
    const allSummedExperience = useMemo(() => calculateSumOfExperiences([...experiences]), [])
    const heroBio = `With ${allSummedExperience.totalYears} years of IT and nearly ${summedExperience.totalYears + 1} years of Full Stack Developer experience, currently contributing as a Senior Software Engineer (UI) at Kognitos, I specialize in engineering high-performance, user-centric web applications. While I have a strong foundation in backend systems (Python/Django), my true passion and expertise lie in Frontend Engineering. I excel at building complex, interactive UIs using React, Next.js, and TypeScript, with a focus on performance optimization, pixel-perfect design, and seamless UX. At Kognitos and Teson, I've led major frontend initiatives—from architecting RBAC systems and analytics dashboards to migrating legacy codebases—always bridging the gap between sophisticated design and scalable engineering.`;

    const conciseHeroBio = `
    Senior Software Engineer (UI) specializing in React, Next.js, and Modern Frontend Architecture. I build high-performance, interactive user interfaces, having delivered complex features like RBAC systems and analytics dashboards. Experienced in driving UX improvements, optimizing load times, and bridging design with engineering.
`;

    const sharedProps = { heroBio, conciseHeroBio, summedExperience };

    // Tailwind's 'md' breakpoint is 768px
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return isDesktop ? <HeroDesktop {...sharedProps} /> : <HeroMobile {...sharedProps} />;
}

export default HeroSection;