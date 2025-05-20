"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const baseShadowClass = 'shadow-md';
const hoverShadowClass = 'shadow-xl';

function TechnologyBox({
    img,
    title,
    borderColor,
    backgroundColor: initialBackgroundColorProp,
    inSkillsSection,
    onAnimationBackgroundColor,
    fontSize = 14,
}) {
    const baseBgSkillsClass = 'bg-secondary'; // e.g., from your theme

    // For project card tech tags (simpler, no complex hover on the box itself)
    if (!inSkillsSection) {
        if (!img && title === 'EJS') {
            return (
                <motion.div
                    className="flex gap-1.5 items-center p-1.5 px-2.5 rounded-md bg-muted border border-border/80 cursor-default"
                    style={{ fontSize: `${fontSize}px` }}
                    whileTap={{ scale: 0.97 }}
                >
                    <strong className="text-muted-foreground" style={{ color: borderColor }}>
                        {'<%= '}{title}{' %>'}
                    </strong>
                </motion.div>
            );
        }

        return (
            <motion.div
                className="flex gap-1.5 items-center p-1.5 px-2.5 rounded-md bg-muted border border-border/80 cursor-default"
                style={{ fontSize: `${fontSize}px` }}
                whileTap={{ scale: 0.97 }}
            >
                {img && (
                    <Image
                        src={img}
                        alt={title}
                        width={fontSize}
                        height={fontSize}
                    />
                )}
                <strong className="text-muted-foreground" style={{ color: borderColor }}>
                    {title}
                </strong>
            </motion.div>
        );
    }

    const imageSize = fontSize * (title === 'React' || title === 'NodeJs' || title === 'Next.js' || title === 'Django Rest' ? 2.8 : 2.2);

    const hoverStyle = {
        '--hover-bg-color': onAnimationBackgroundColor || 'hsl(var(--secondary))', // Fallback
    };

    return (
        <motion.div
            // Base styles
            className={`
                flex flex-col justify-center items-center gap-2 p-3 sm:p-4 rounded-lg 
                text-center border border-border/60 h-full cursor-pointer 
                ${baseBgSkillsClass} ${baseShadowClass}
                transition-all duration-200 ease-out 
                md:hover:scale-108 md:hover:${hoverShadowClass} 
                md:hover:![background-color:var(--hover-bg-color)] /* Apply dynamic bg on desktop hover */
            `}
            style={hoverStyle} // Apply the custom property
            whileTap={{ scale: 0.95 }} // Tap feedback for all devices
        >
            {img && (
                <Image
                    src={img}
                    alt={title}
                    width={imageSize}
                    height={imageSize}
                />
            )}
            <div className="text-foreground font-medium" style={{ fontSize: `${fontSize * 0.9}px` }}>
                {title}
            </div>
        </motion.div>
    );
}

export default TechnologyBox;