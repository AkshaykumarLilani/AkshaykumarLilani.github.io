"use client";

import React, { useState, useEffect } from 'react';
import { github_logo, hand_wave_animation, linkedin_logo } from '../../assets';
import Lottie from 'lottie-react';
import hand_wave_animation_data from '../../assets/lottie/hand_wave.json';
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function HeroSection() {
    const [wave, setWave] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setWave(false);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className=" flex justify-start items-start p-3 md:py-5"
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
                        <div className="text-2xl">
                            Sr. Software Engineer at Teson LLP
                        </div>
                    </div>
                    <div>
                        Full Stack Web Developer with 2+ years of experience in building scalable and user-friendly web applications. Proficient in frontend technologies like React.js and Tailwind CSS, and backend frameworks such as Django. Experienced in API integration, database management (PostgreSQL), and modernizing legacy systems. Adept at delivering solutions that improve performance, enhance user experience, and meet business goals.
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
