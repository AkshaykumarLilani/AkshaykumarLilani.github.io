"use client";

import React from 'react';
import { github_logo, linkedin_logo, profile_image } from '@/assets';
import Image from 'next/image';
import WavingHand from '../WavingHand';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const HeroDesktop = ({ heroBio }) => {
    return (
        <section
            className="flex flex-row justify-start items-start py-5"
            id="hero-desktop"
        >
            <HoverBorderGradient
                containerClassName="rounded-2xl"
                as="div"
                className="flex gap-2 p-5 bg-muted rounded-2xl w-full"
            >
                    <WavingHand height={80} width={160} />
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="text-4xl">
                                <span>
                                    <strong className="text-primary">
                                        Akshaykumar Lilani
                                    </strong>
                                </span>
                            </div>
                            <div className="text-2xl text-foreground">Senior. Software Engineer | <a href="https://teson.xyz" target="_blank" rel="noopener noreferrer">Teson LLP</a></div>
                            {/* <div className="text-xl text-muted-foreground">Full Stack Developer (Django & Next.js/React)</div> */}
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='w-3/4 text-foreground'>
                                {heroBio}
                            </div>
                            <div className="flex justify-center items-center w-1/4">
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
                                <Image width={44} src={linkedin_logo} alt="LinkedIn Logo" />
                            </a>
                            <a
                                href="https://www.github.com/AkshaykumarLilani"
                                target="_blank"
                                className="no-underline"
                            >
                                <Image width={50} src={github_logo} alt="Github Logo" />
                            </a>
                        </div>
                    </div>
            </HoverBorderGradient>
        </section>
    );
};

export default HeroDesktop;