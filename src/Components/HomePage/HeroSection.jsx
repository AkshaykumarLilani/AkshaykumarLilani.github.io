import React, { useState, useEffect } from 'react'
import { github_logo, linkedin_logo } from '../../assets'
import { useCurrentWidth } from 'react-socks'
import { animated, useSpring } from '@react-spring/web';

function HeroSection() {
    const [wave, setWave] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setWave(false);
        }, 1000); // Adjust the interval as needed

        return () => clearInterval(timer);
    }, []);

    const waveAnimation = useSpring({
        reset: true,
        from: { transform: 'translate(5px, 15px)' },
        to: async (next) => {
            while (wave) {
                await next({ transform: 'translate(5px, 15px)' });
                await next({ transform: 'translate(15px, 5px)' });
            }
        },
        config: { duration: 120 }
    });

    const waveAnimation2 = useSpring({
        reset: true,
        from: { transform: 'translate(0px, 15px)' },
        to: async (next) => {
            while (wave) {
                await next({ transform: 'translate(15px, 0px)' });
                await next({ transform: 'translate(0px, 15px)' });
            }
        },
        config: { duration: 80 }
    });

    const currentWidth = useCurrentWidth();


    return (
        <section className='max-width-desktop mx-auto d-flex justify-content-start align-items-start min-height-section p-3 p-md-0  pt-md-5'>
            <div className='d-flex gap-2'
                style={{
                    flex: 1,
                    backgroundColor: "rgba(186, 224, 255, 0.46)",
                    borderRadius: 20,
                    padding: "30px 10px",
                }}
            >
                <animated.div className='d-none d-md-block' style={{ fontSize: 48, marginTop: -15, ...waveAnimation }}>👋🏼</animated.div>
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <div style={{ fontSize: 48 }}>
                            <animated.div className='d-block d-md-none' style={{ fontSize: 48, ...waveAnimation2 }}>👋🏼</animated.div>
                            <span>Hello, I am <strong className='color-accent'>Akshaykumar Lilani</strong></span>
                        </div>
                        <div style={{ fontSize: 32 }}>Sr. Software Engineer at Teson LLP</div>
                    </div>
                    <div>
                        Versatile Full Stack Web Developer with more than a year of experience in MERN, Django REST Framework, Docker, Python Scripting, Node Scripting, PineScript, AWS EC2, AWS S3, and Salesforce REST APIs. Proven track record in solo and collaborative projects, showcasing technical versatility, problem-solving, and effective teamwork.
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <a href="https://www.linkedin.com/in/akshay-lilani" target='_blank' style={{ textDecoration: "none" }}>
                            <img width={44} src={linkedin_logo} alt="LinkedIn Logo" />
                        </a>
                        <a href="https://www.github.com/AkshaykumarLilani" target='_blank' style={{ textDecoration: "none" }}>
                            <img width={50} src={github_logo} alt="Github Logo" />
                        </a>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default HeroSection