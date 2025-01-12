import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import styles from './Contact.module.css';
import {
    linkedin_logo,
    github_logo,
    tradingview_logo,
    email_logo,
    phone_logo,
    contact_animation,
} from '../../assets';
import { useCurrentWidth } from 'react-socks';
import Lottie from 'lottie-react';
import working_animation from '../../assets/lottie/working.json';

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
        link: 'mailto:aksbaylilani60@gmail.com',
        text: 'aksbaylilani60@gmail.com',
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
            className="max-width-desktop mx-auto d-flex flex-column justify-content-center gap-5 align-items-start p-3 py-md-5"
            id="contact"
        >
            <div>
                <SectionTitle title={`Connect with me`} />
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end w-100 gap-2">
                <div
                    className="d-flex flex-column gap-2 w-100"
                    style={{ flex: 3, maxWidth: 600 }}
                >
                    <div className="d-flex gap-2">
                        {socialContacts?.map((contact, ind) => (
                            <IndividualContactCard {...contact} key={ind} />
                        ))}
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-2">
                        {personalContacts?.map((contact, ind) => (
                            <IndividualContactCard {...contact} key={ind} />
                        ))}
                    </div>
                </div>
                <div style={{ width: 280 }}>
                    {/* <img src={contact_animation} alt="Animation" /> */}
                    <Lottie animationData={working_animation} loop={true} />
                </div>
            </div>
        </section>
    );
}

const IndividualContactCard = ({ img, text, link }) => {
    const currentWidth = useCurrentWidth();

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles['contact-card'] + ' '}
            style={currentWidth < 550 ? { flex: 1 } : {}}
        >
            <img width={currentWidth < 1120 ? 25 : 35} src={img} alt="" />
            <span>{text}</span>
        </a>
    );
};

export default Contact;
