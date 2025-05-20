"use client";

import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
// Removed import for styles from './Contact.module.css'; assuming we'll rely on Tailwind
import {
    linkedin_logo,
    github_logo,
    tradingview_logo,
    email_logo,
    phone_logo,
} from '@/assets';
import Lottie from 'lottie-react';
import working_animation from '@/assets/lottie/working.json';
import Image from 'next/image';
import useWindowWidth from '@/lib/hooks/use-window-width'; //
import { BackgroundBeams } from '../ui/background-beams';   //
import { motion } from 'framer-motion';

const socialContacts = [
    { img: linkedin_logo, link: 'https://www.linkedin.com/in/akshay-lilani', text: 'LinkedIn', alt: 'LinkedIn Profile' },
    { img: github_logo, link: 'https://github.com/AkshaykumarLilani', text: 'GitHub', alt: 'GitHub Profile' },
    { img: tradingview_logo, link: 'https://in.tradingview.com/u/S_Codes/', text: 'TradingView', alt: 'TradingView Profile' },
];

const personalContacts = [
    { img: email_logo, link: 'mailto:akshaylilani60@gmail.com', text: 'akshaylilani60@gmail.com', alt: 'Email Akshay Lilani' },
    { img: phone_logo, link: 'tel:+919049963060', text: '(+91) 9049 963060', alt: 'Call Akshay Lilani' },
];

const allContacts = [...socialContacts, ...personalContacts];

const cardHoverVariants = {
    rest: {
        scale: 1,
        boxShadow: "0px 2px 4px -1px hsl(var(--foreground) / 0.05)", // Softer base shadow
        borderColor: "hsla(var(--border), 0.5)", // More subtle border
    },
    hover: {
        scale: 1.04, // Slightly more noticeable scale
        boxShadow: "0px 5px 10px -2px hsl(var(--primary) / 0.25)",
        borderColor: "hsl(var(--primary))",
        transition: { duration: 0.2, ease: "circOut" }
    }
};

// --- IndividualContactCard Component (defined within or imported) ---
function IndividualContactCard({ img, text, link, alt }) {
    const currentWidth = useWindowWidth();
    const iconSize = currentWidth < 380 ? 18 : 20; // Smaller icons for very small screens
    const textSizeClass = currentWidth < 380 ? 'text-xs' : 'text-sm';

    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`
                bg-secondary/70 dark:bg-secondary/50  hover:bg-secondary 
                rounded-lg 
                flex flex-row items-center
                p-2.5 md:p-3                    
                gap-2 md:gap-2.5                 
                text-foreground no-underline 
                border border-secondary/70        
                w-full                          
                transition-colors duration-200  
            `}
            variants={cardHoverVariants}
            initial="rest"
            whileHover="hover"
        >
            <Image
                width={iconSize}
                height={iconSize}
                src={img}
                alt={alt || text}
                className="dark:filter dark:brightness-0 dark:invert flex-shrink-0"
            />
            <span className={`font-medium break-all ${textSizeClass} leading-tight`}>
                {text}
            </span>
        </motion.a>
    );
};

// --- Contact Component ---
function Contact() {
    return (
        <section
            className="relative flex flex-col justify-center gap-5 items-start p-3 md:p-6 my-10 md:my-16 overflow-hidden rounded-lg min-h-[70vh]"
            id="contact"
        >
            <BackgroundBeams className="z-0" /> {/* */}
            <div className="relative z-10 w-full">
                <div className="mb-5 md:mb-6 text-center md:text-left"> {/* Centered title on mobile */}
                    <SectionTitle title={`Let's Connect`} />
                    <p className="mt-2 text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 text-left">
                        {`I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!`}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 md:gap-10">
                    <div
                        className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full lg:max-w-[calc(100%-300px-2.5rem)]"
                    >
                        {allContacts.map((contact) => (
                            <IndividualContactCard {...contact} key={contact.link} />
                        ))}
                    </div>

                    <div className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[240px] self-center mt-4 lg:mt-0">
                        <Lottie animationData={working_animation} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;