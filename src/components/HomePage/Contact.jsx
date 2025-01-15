"use client";

import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import styles from './Contact.module.css';
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
import useWindowWidth from '@/lib/hooks/use-window-width';
import { BackgroundBeams } from '../ui/background-beams';
import Footer from '../common/Footer';

const socialContacts = [
    {
        img: linkedin_logo,
        link: 'https://www.linkedin.com/in/akshay-lilani',
        text: 'Linkedin',
    },
    {
        img: github_logo,
        link: 'https://github.com/AkshaykumarLilani',
        text: 'Github',
    },
    {
        img: tradingview_logo,
        link: 'https://in.tradingview.com/u/S_Codes/',
        text: '@S_Codes',
    },
];

const personalContacts = [
    {
        img: email_logo,
        link: 'mailto:akshaylilani60@gmail.com',
        text: 'akshaylilani60@gmail.com',
    },
    {
        img: phone_logo,
        link: 'tel:919049963060',
        text: '(+91) 9049 963060',
    },
];

function Contact() {
    return (
        <section
            className=" flex flex-col justify-center gap-5 items-start p-3 md:py-5"
            id="contact"
        >
            <div>
                <SectionTitle title={`Connect with me`} />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-2">
                <div
                    className="flex flex-col gap-2 w-full"
                    style={{ flex: 3, maxWidth: 600 }}
                >
                    <div className="flex gap-2">
                        {socialContacts?.map((contact, ind) => (
                            <IndividualContactCard {...contact} key={ind} />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        {personalContacts?.map((contact, ind) => (
                            <IndividualContactCard {...contact} key={ind} />
                        ))}
                    </div>
                </div>
                <div className="w-[280px]">
                    <Lottie animationData={working_animation} loop={true} />
                </div>
            </div>
        </section>
    );
}

const IndividualContactCard = ({ img, text, link }) => {
    const currentWidth = useWindowWidth();

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`${styles['contact-card']}`}
            style={currentWidth < 550 ? { flex: 1 } : {}}
        >
            <Image width={currentWidth < 1120 ? 25 : 35} src={img} alt="" />
            <span>{text}</span>
        </a>
    );
};

export default Contact;
