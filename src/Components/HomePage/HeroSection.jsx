import React, { useState, useEffect } from 'react';
import { github_logo, hand_wave_animation, linkedin_logo } from '../../assets';
import { useCurrentWidth } from 'react-socks';
import { animated, easings, useSpring } from '@react-spring/web';
import Lottie from 'lottie-react';
import hand_wave_animation_data from '../../assets/lottie/hand_wave.json';

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
            className="max-width-desktop mx-auto d-flex justify-content-start align-items-start p-3 py-md-5"
            id="hero"
        >
            <div
                className="d-flex gap-2 p-3"
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(186, 224, 255, 0.46)',
                    borderRadius: 20,
                }}
            >
                {/* <animated.div className='d-none d-md-block' style={{ fontSize: 48, marginTop: -15, ...waveAnimation }}>👋🏼</animated.div> */}
                <Lottie
                    className="d-none d-md-block"
                    animationData={hand_wave_animation_data}
                    loop={true}
                    style={{
                        height: 80,
                        width: 160,
                        transform: 'rotate(-40deg)',
                    }}
                />
                <div className="d-flex flex-column gap-4">
                    <div>
                        <div style={{ fontSize: 48 }}>
                            {/* <animated.div  style={{ fontSize: 48, ...waveAnimation2 }}>👋🏼</animated.div> */}
                            <Lottie
                                className="d-block d-md-none"
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
                                <strong className="color-accent">
                                    Akshaykumar Lilani
                                </strong>
                            </span>
                        </div>
                        <div style={{ fontSize: 32 }}>
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
                    <div className="d-flex align-items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/akshay-lilani"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <img
                                width={44}
                                src={linkedin_logo}
                                alt="LinkedIn Logo"
                            />
                        </a>
                        <a
                            href="https://www.github.com/AkshaykumarLilani"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <img
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
