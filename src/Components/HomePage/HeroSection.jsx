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
        from: { transform: 'rotate(0deg)' },
        to: async (next) => {
            while (wave) {
                await next({ transform: 'rotate(-3deg)' });
                await next({ transform: 'rotate(2deg)' });
            }
        },
        config: {duration: 100}
    });

    const currentWidth = useCurrentWidth();


    return (
        <section className='max-width-desktop mx-auto d-flex justify-content-start align-items-start min-height-section pt-2 pt-md-5'>
            <div className='d-flex gap-2'>
                <animated.div style={{ fontSize: 48, ...waveAnimation }}>👋🏼</animated.div>
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <div style={{ fontSize: 48 }}>Hello, I am <strong className='color-accent'>Akshaykumar Lilani</strong></div>
                        <div style={{ fontSize: 32 }}>Sr. Software Engineer at Teson LLP</div>
                    </div>
                    <div>
                        A Full Stack Developer, proficient in developing modern web applications,
                        <br />
                        I work with MongoDB, Express.js, React, Redux & Django Rest Framework.
                    </div>
                    <div className='d-flex gap-3'>
                        <img width={44} src={linkedin_logo} alt="LinkedIn Logo" />
                        <img width={44} src={github_logo} alt="Github Logo" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection