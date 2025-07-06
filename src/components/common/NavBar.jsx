// src/components/common/NavBar.jsx
"use client";

import Link from 'next/link'; // For client-side navigation to #hero
import ResumeButton from './ResumeButton';
import { useSpring, animated, easings } from '@react-spring/web';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ModeToggle } from '../theme-toggle';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Menu as MenuIcon, X as CloseIcon, Download, Moon, Sun, User, Briefcase, Code, Layers, Mail, Home } from 'lucide-react'; // Icons

// Consistent links array for both navbars
const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Mail },
];

// --- Desktop Navbar ---
function DesktopNavbarComponent({ scrollTo, active, links, baseSpring }) {
    return (
        <animated.nav
            style={baseSpring}
            className="fixed top-0 left-0 right-0 z-[999] flex justify-center py-3 md:py-2 px-3"
        >
            <div className="flex justify-between items-center py-2.5 px-4 w-full max-w-[1120px] bg-background/80 dark:bg-neutral-950/80 backdrop-blur-md rounded-xl shadow-lg border border-border/60">
                <div
                    onClick={(e) => scrollTo(e, 'hero')}
                    className="cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <h5 className="mb-0 text-primary text-xl font-semibold">Akshaykumar Lilani</h5>
                </div>
                <div className="flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={`desktop-${link.id}`}
                            href={`#${link.id}`}
                            onClick={(e) => scrollTo(e, link.id)}
                            className={`relative group cursor-pointer text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-150 ease-in-out
                                ${active === link.id
                                    ? 'text-primary'
                                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                                }`}
                        >
                            {link.label}
                            {active === link.id && (
                                <motion.div
                                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-primary rounded-full"
                                    layoutId="desktop-nav-underline"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                    <div className="ml-3 mr-1"> {/* Added margin for ResumeButton */}
                        <ResumeButton id={`resume-button-1`} />
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </animated.nav>
    );
}

function MobileNavbarComponent({ scrollTo, active, links, baseSpring }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleLinkClick = (e, sectionId) => {
        e.preventDefault();
        scrollTo(e, sectionId);
        setIsExpanded(false); 
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isExpanded) {
                setIsExpanded(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isExpanded]);

    return (
        // This outer div is for positioning the entire navbar structure at the bottom.
        <animated.div
            style={baseSpring}
            // Positioning: fixed to bottom, spanning width with margin, then centered.
            // left-4 and right-4 create the side margins. mx-auto centers it.
            className="fixed bottom-4 left-4 right-4 z-[999] md:hidden flex justify-center"
        >
            {/* This motion.div is the actual visible navbar bar with max-width and styling */}
            <motion.div
                className="bg-background/85 dark:bg-neutral-950/85 backdrop-blur-lg shadow-2xl rounded-2xl border border-muted overflow-hidden w-full max-w-xs sm:max-w-sm"
                // max-w-xs for very small, sm:max-w-sm for slightly larger mobile. Adjust as needed.
                animate={{ height: isExpanded ? "auto" : "3.75rem" }} // 3.75rem = h-15 (60px), slightly more compact
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
                {/* Collapsed Bar Content */}
                <div className="flex justify-between items-center h-[3.75rem] px-3"> {/* Reduced padding slightly */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => handleLinkClick(e, 'hero')}
                        className={`p-2 rounded-full text-sm ${active === 'hero' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                        aria-label="Go to top"
                    >
                        {/* Using "AL" initials for compactness */}
                        <span className="font-semibold">AL</span>
                    </Button>

                    <div className="flex items-center gap-1.5"> {/* Reduced gap */}
                        {/* Icon-only Resume Button */}
                        <ResumeButton id={`mobile-resume-button`} />
                        <ModeToggle /> {/* Ensure this component itself is compact */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="p-2.5 text-muted-foreground hover:text-foreground data-[state=open]:bg-primary/10 data-[state=open]:text-primary"
                            aria-label={isExpanded ? "Close menu" : "Open menu"}
                        >
                            {isExpanded ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Expandable Links Section */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.nav
                            className="px-3 pb-3 pt-1 flex flex-col items-center border-t border-border/50"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto", transition: { delay: 0.05, duration: 0.3, ease: "circOut" } }}
                            exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: "circIn" } }}
                        >
                            {links.map((link) => (
                                <a
                                    key={`mobile-${link.id}`}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleLinkClick(e, link.id)}
                                    className={`flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-md text-sm
                                        ${active === link.id
                                            ? 'text-primary font-medium bg-primary/10'
                                            : 'text-foreground/90 hover:text-foreground hover:bg-muted/50'
                                        }`}
                                >
                                    <link.icon className={`h-4 w-4 ${active === link.id ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.div>
        </animated.div>
    );
}


// --- Main NavBar ---
function NavBar() {
    const currentWidth = useWindowWidth();
    const [active, setActive] = useState('hero');

    const scrollTo = (e, sectionName) => {
        e.preventDefault();
        const element = document.querySelector(`#${sectionName}`);
        console.log('scrollTo', sectionName, element);
        if (element) {
            // setActive(sectionName); // Active state updated by scroll handler primarily
            let offset = 0;
            if (currentWidth > 768) { // Desktop
                offset = 80;
            } else { // Mobile
                offset = 0;
            }
            if (sectionName === 'hero') offset = 0;

            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            console.log({offsetPosition})

            setTimeout(()=>{
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }, 0)
        }
    };

    useEffect(() => {
        const allScrollSections = ['hero', ...navItems.map(l => l.id)];
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let currentSectionId = 'hero';
            const offset = currentWidth > 768 ? 100 : 80;

            for (const id of allScrollSections) {
                const section = document.querySelector(`#${id}`);
                if (section) {
                    const sectionTop = section.offsetTop - offset;
                    if (scrollY >= sectionTop) {
                        currentSectionId = id;
                    }
                }
            }
            setActive(currentSectionId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentWidth]);

    const navAnimationConfig = {
        from: { y: currentWidth > 768 ? -80 : 80, opacity: 0 }, // Slide from top for desktop, from bottom for mobile
        to: { y: 0, opacity: 1 },
        config: { duration: 600, easing: easings.easeOutCubic },
        delay: 200, // Slight delay for the animation to start after page load
    };
    const navSpring = useSpring(navAnimationConfig);

    if (currentWidth <= 768) { // Breakpoint for mobile
        return <MobileNavbarComponent scrollTo={scrollTo} active={active} links={navItems} baseSpring={navSpring} />;
    } else {
        return <DesktopNavbarComponent scrollTo={scrollTo} active={active} links={navItems} baseSpring={navSpring} />;
    }
}

export default NavBar;