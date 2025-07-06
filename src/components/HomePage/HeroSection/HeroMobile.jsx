"use client";

import React from 'react';
import { github_logo, linkedin_logo, profile_image } from '@/assets';
import Image from 'next/image';
import WavingHand from '../WavingHand';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const HeroMobile = ({ heroBio, conciseHeroBio, summedExperience }) => {
    return (
        <section
            className="flex flex-col justify-start items-start p-5"
            id="hero-mobile"
        >
            <HoverBorderGradient
                containerClassName="rounded-2xl"
                as="div"
                className="flex flex-col items-center justify-center p-4 py-8 bg-muted rounded-2xl w-full"
            >
                <div className="text-2xl flex">
                    <WavingHand height={30} width={30} />
                    <strong className="text-primary">
                        Akshaykumar Lilani
                    </strong>
                </div>
                <div className="flex justify-center items-center w-full">
                    <Image
                        src={profile_image}
                        alt="Akshaykumar Lilani"
                        width={180}
                        height={180}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <div className="text-md text-primary">Senior Software Engineer | <a href="https://teson.xyz" target="_blank" rel="noopener noreferrer">Teson LLP</a></div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 items-center mt-2'>
                    <div className='w-full text-base text-center text-muted-foreground'>
                        {conciseHeroBio}
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <a
                        href="https://www.linkedin.com/in/akshay-lilani"
                        target="_blank"
                        className="no-underline"
                    >
                        <Image width={40} src={linkedin_logo} className='dark:invert dark:filter' alt="LinkedIn Logo" />
                    </a>
                    <a
                        href="https://www.github.com/AkshaykumarLilani"
                        target="_blank"
                        className="no-underline"
                    >
                        <Image width={46} src={github_logo} className='dark:invert dark:filter' alt="Github Logo" />
                    </a>
                </div>
            </HoverBorderGradient>
        </section>
    );
}

export default HeroMobile;