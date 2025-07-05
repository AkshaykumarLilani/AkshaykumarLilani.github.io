"use client";

import React from 'react';
import TechnologyBox from '@/components/common/TechnologyBox';
import { project_githubLogo, project_gotoLink } from '@/assets';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
// import styles from './ProjectCard.module.css'; // Keep for any specific styles if needed

// Updated shadow definitions (can be moved to module or kept here for spring)
const cardBoxShadowEnter = '0px 8px 20px -4px hsl(var(--primary) / 0.25)'; // Softer, more modern hover shadow
const cardBoxShadowLeave = '0px 4px 6px -2px hsl(var(--foreground) / 0.06)'; // Subtle base shadow

function ProjectCard({
    title,
    description,
    techStack,
    githubRepositoryLink,
    deployedLink,
    image,
}) {
    // Spring animation for the entire card
    const [cardSprings, cardApi] = useSpring(() => ({
        from: {
            transform: 'translateY(0px) scale(1)',
            boxShadow: cardBoxShadowLeave,
        },
        config: { tension: 300, friction: 20 },
    }));

    const handleCardMouseEnter = () => {
        cardApi.start({
            transform: 'translateY(-5px) scale(1.02)',
            boxShadow: cardBoxShadowEnter,
        });
    };

    const handleCardMouseLeave = () => {
        cardApi.start({
            transform: 'translateY(0px) scale(1)',
            boxShadow: cardBoxShadowLeave,
        });
    };

    // Simplified link hover (can use Tailwind's hover states for opacity/bg change)
    // Or keep spring if a more complex link hover is desired

    return (
        <animated.div
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            style={cardSprings}
            className="flex flex-col justify-between gap-4 bg-card p-5 rounded-xl border border-border/70"
            // styles['project-card'] can be removed if all styling is via Tailwind now
            // or keep it for base shadow if not using spring for it
        >
            <div className="flex flex-col">
                {/* Image container with aspect ratio */}
                <div className="mb-3 aspect-video w-full overflow-hidden rounded-lg border border-border/50">
                    <Image
                        src={image}
                        alt={title || "Project image"} // Add alt text
                        width={400} // Provide appropriate width/height for Next/Image
                        height={225} // (16:9 ratio example)
                        className="w-full h-full object-cover" // Ensure image covers the area
                    />
                </div>
                <h5 className="mb-1 text-xl font-semibold text-foreground">{title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed mb-0">{description}</p>
            </div>

            <div className="flex flex-col gap-3 mt-auto"> {/* mt-auto to push this block to bottom */}
                {techStack && techStack.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                        {techStack.map((tech, index) => (
                            <TechnologyBox
                                key={index}
                                {...tech}
                                // Pass theme-aware colors or ensure TechnologyBox handles it
                                // Example: Use secondary background for tech tags
                                backgroundColor="hsl(var(--secondary))"
                                borderColor="hsl(var(--secondary-foreground))"
                                size="sm"
                            />
                        ))}
                    </div>
                )}
                <div className="flex justify-between items-center w-full gap-3 pt-2 border-t border-border/50 mt-2">
                    {githubRepositoryLink ? (
                        <a
                            href={githubRepositoryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                            <Image
                                src={project_githubLogo} // Ensure this SVG is styled to inherit color or is a suitable color
                                alt="GitHub"
                                width={16}
                                height={16}
                                className="dark:invert" // Example to make it visible in dark mode if it's black
                            />
                            <span>GitHub</span>
                        </a>
                    ) : (
                        <div></div> // Placeholder to maintain layout if one link is missing
                    )}

                    <a
                        href={deployedLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                    >
                        <span>View Live</span>
                        <Image
                            src={project_gotoLink} // Ensure this SVG is styled to inherit color or is a suitable color
                            alt="View Live"
                            width={16}
                            height={16}
                            className="dark:filter dark:brightness-0 dark:invert" // Example for dark mode visibility
                        />
                    </a>
                </div>
            </div>
        </animated.div>
    );
}

export default ProjectCard;