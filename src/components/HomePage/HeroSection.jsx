"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { github_logo, hand_wave_animation, linkedin_logo, profile_image } from '../../assets';
import Lottie from 'lottie-react';
import hand_wave_animation_data from '../../assets/lottie/hand_wave.json';
import Image from 'next/image';
import { calculateSumOfExperiences } from '@/lib/dateUtils';
import { experiences } from '@/lib/data/experiences';
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function HeroSection() {
    const [wave, setWave] = useState(true);

    const summedExperience = useMemo(() => calculateSumOfExperiences([experiences[0], experiences[1], experiences[3]]), []);

    // const heroTagline = "Full Stack Developer (Django & Next.js/React) | Sr. Software Engineer at Teson LLP";
    const heroBio = `With nearly ${summedExperience.totalYears + 1} years of experience as a Full Stack Developer, currently contributing as a Sr. Software Engineer at Teson LLP, I specialize in building high-performance, scalable web applications. My expertise is centered around Python (Django/REST Framework) for robust back-end development, and modern JavaScript frameworks (Next.js, React.js) for dynamic front-end solutions. I'm proficient in leveraging PostgreSQL for database management and Docker for containerization, with a strong focus on API integration and delivering solutions that enhance user experience and meet key business objectives.`;


    useEffect(() => {
        const timer = setInterval(() => {
            setWave(false);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="flex flex-col md:flex-row justify-start items-start p-3 md:py-5"
            id="hero"
        >
            <div
                className="flex gap-2 p-3 bg-muted rounded-2xl"
                style={{
                    flex: 1,
                }}
            >
                <Lottie
                    className="hidden md:block"
                    animationData={hand_wave_animation_data}
                    loop={true}
                    style={{
                        height: 80,
                        width: 160,
                        transform: 'rotate(-40deg)',
                    }}
                />
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="text-4xl">
                            <Lottie
                                className="block md:hidden"
                                animationData={hand_wave_animation_data}
                                loop={true}
                                style={{
                                    height: 80,
                                    width: 80,
                                    transform: 'rotate(-40deg)',
                                }}
                            />
                            <span>
                                Hello, I am{' '}
                                <strong className="text-primary">
                                    Akshaykumar Lilani
                                </strong>
                            </span>
                        </div>
                        <>
                            <div className="text-2xl">Sr. Software Engineer at <a href="https://teson.xyz" target="_blank" rel="noopener noreferrer">Teson LLP</a></div>
                            <div className="text-xl text-muted-foreground">Full Stack Developer (Django & Next.js/React)</div>
                        </>

                        {/* <TextGenerateEffect words={heroTagline} className="text-2xl text-foreground" /> */}
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <div className='w-full md:w-3/4'>
                            {heroBio}
                        </div>
                        <div className="flex justify-center items-center w-full md:w-1/4 mt-4 md:mt-0">
                            <Image
                                src={profile_image}
                                alt="Akshaykumar Lilani"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/akshay-lilani"
                            target="_blank"
                            className="no-underline"
                        >
                            <Image
                                width={44}
                                src={linkedin_logo}
                                alt="LinkedIn Logo"
                            />
                        </a>
                        <a
                            href="https://www.github.com/AkshaykumarLilani"
                            target="_blank"
                            className="no-underline"
                        >
                            <Image
                                width={50}
                                src={github_logo}
                                alt="Github Logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
