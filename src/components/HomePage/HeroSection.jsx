"use client";

import React, { useState, useEffect } from 'react';
import { github_logo, hand_wave_animation, linkedin_logo } from '../../assets';
import Lottie from 'lottie-react';
import hand_wave_animation_data from '../../assets/lottie/hand_wave.json';
import Image from 'next/image';

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
                        Frontend-focused full-stack developer with 2+ years of
                        experience specializing in building dynamic and engaging
                        user interfaces with React.js. Proficient in state
                        management (Redux Toolkit), component design, and
                        responsive layouts. Adept in backend technologies for
                        seamless integration and support of frontend features.
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