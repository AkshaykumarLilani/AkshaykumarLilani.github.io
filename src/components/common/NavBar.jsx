"use client";

import ResumeButton from './ResumeButton';
import { useSpring, animated, easings } from '@react-spring/web';
import { useState, useEffect } from 'react';
import { ModeToggle } from '../theme-toggle';
import useWindowWidth from '@/lib/hooks/use-window-width';

const links = ['about', 'skills', 'projects', 'contact'];

function NavBar() {
    const currentWidth = useWindowWidth();

    const [active, setActive] = useState('about');

    const scrollTo = (e, sectionName) => {
        e.preventDefault();
        let x = document.querySelector(`#${sectionName}`);
        setActive(sectionName);
        if (x) {
            let rect = x.getBoundingClientRect();
            let distanceFromTop = rect.top;
            let scrollToY = window.scrollY + distanceFromTop;
            if (currentWidth <= 1119) {
                scrollToY -= 10;
            } else {
                scrollToY -= 70;
            }
            window.scrollTo({
                top: scrollToY,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section');

            const delayHighlight = (id) => {
                setActive(id);
            };

            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY - 100;
                const sectionBottom = sectionTop + rect.height - 100;

                if (scrollY === 0) {
                    delayHighlight('about');
                } else if (
                    scrollY >= sectionTop - 100 &&
                    scrollY <= sectionBottom
                ) {
                    let sectionId = sections[i].id;
                    if (sectionId === 'hero') {
                        delayHighlight('about');
                    } else if (sectionId === 'github-stats') {
                        delayHighlight('contact');
                    } else if (sectionId) {
                        delayHighlight(sectionId);
                    }
                    break;
                }
            }
        };

        let timer = null;
        const efficientScrollHandler = () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                handleScroll();
            }, 100);
        };
        window.addEventListener('scroll', efficientScrollHandler);

        return () => {
            window.removeEventListener('scroll', efficientScrollHandler);
        };
    }, []);

    if (currentWidth <= 1119) {
        return <MobileNavbar scrollTo={scrollTo} active={active} />
    } else {
        return <DesktopNavbar scrollTo={scrollTo} active={active} />
    }
}


const MobileNavbar = ({ scrollTo, active }) => {

    const scaleInFromDown = useSpring({
        from: {
            y: 1000,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
        },
        config: {
            duration: 1000,
            easing: easings.easeInOutQuint,
        },
    });

    return (
        <animated.nav
            className="flex justify-center py-4 w-full"
            id="nav-menu"
            style={{
                position: 'fixed',
                bottom: 0,
                ...scaleInFromDown,
                zIndex: 999,
            }}
        >
            <div
                className="flex justify-between items-center py-2 px-2 mx-auto bg-foreground rounded-lg"
                style={{
                    // backgroundColor: 'rgba(255, 255, 255, 0.78)',
                    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    // border: '1px solid #FFF',
                    borderRadius: '10px',
                    backdropFilter: 'blur(5px)',
                    minWidth: 350,
                    width: '80%',
                    fontSize: '14px',
                }}
            >
                <div
                    className="flex justify-around items-center"
                    style={{ flex: 1 }}
                >
                    {links?.map((link, i) => (
                        <div className="flex justify-between" key={i + 'mobnav'}>
                            <a
                                href={`#${link}`}
                                className={`cursor-pointer nav-link text-background ${link} ${link === active ? 'active' : ''}`}
                                onClick={(e) => scrollTo(e, link)}
                                style={{ scrollMargin: 20, flex: 1 }}
                            >
                                {link[0].toUpperCase() + link.slice(1)}
                            </a>
                        </div>
                    ))}
                    <ResumeButton id={`resume-button-1`} />
                </div>
            </div>
        </animated.nav>
    );
}

const DesktopNavbar = ({ scrollTo, active }) => {

    const scaleInFromTop = useSpring({
        from: {
            y: -1000,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
        },
        config: {
            duration: 1000,
            easing: easings.easeInOutCirc,
        },
    });

    return (
        <animated.nav
            className="flex justify-center py-4 px-3 mx-auto max-w-[1120px]"
            id="nav-menu"
            style={{
                position: 'sticky',
                top: 0,
                ...scaleInFromTop,
                zIndex: 999,
            }}
        >
            <div
                className="flex justify-between items-center py-2 px-2 w-full bg-foreground rounded-lg"
                style={{
                    // backgroundColor: 'rgba(255, 255, 255, 0.78)',
                    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    // border: '1px solid #FFF',
                    // borderRadius: '10px',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <div
                    onClick={(e) => scrollTo(e, 'hero')}
                    className="cursor-pointer nav-link home"
                >
                    <h5 className="mb-0 text-primary text-2xl">Akshaykumar Lilani</h5>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {links?.map((link, i) => (
                        <a
                            key={`desktop-${i}`}
                            href={`#${link}`}
                            className={`cursor-pointer nav-link text-background ${link} ${link === active ? 'active' : ''}`}
                            onClick={(e) => scrollTo(e, link)}
                            style={{ scrollMargin: 20 }}
                        >
                            {link[0].toUpperCase() + link.slice(1)}
                        </a>
                    ))}
                    <ResumeButton id={`resume-button-1`} />
                    <ModeToggle />
                </div>
            </div>
        </animated.nav>
    )
}

export default NavBar;
