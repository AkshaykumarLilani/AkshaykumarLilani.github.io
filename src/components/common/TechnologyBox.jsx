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
    backgroundColor: initialBackgroundColorProp, // Not directly used in new hover, but kept for compatibility
    inSkillsSection,
    onAnimationBackgroundColor, // Used for whileHover background
    size = 'md', // 'sm', 'md', 'lg'
}) {
    const baseShadowClass = 'shadow-md';
    const hoverShadowClass = 'shadow-xl';

    const sizeMap = {
        sm: { text: 12, image: 24, boxPadding: 'p-2' },
        md: { text: 14, image: 32, boxPadding: 'p-3 sm:p-4' },
        lg: { text: 16, image: 48, boxPadding: 'p-4 sm:p-5' },
    };

    const { text: fontSize, image: imageSize, boxPadding } = sizeMap[size];

    // For project card tech tags (simpler, no complex hover on the box itself)
    if (!inSkillsSection) {
        if (!img && title === 'EJS') {
            return (
                <motion.div
                    className={`flex gap-1.5 items-center ${boxPadding} px-2.5 rounded-md bg-muted border border-border/80 cursor-default`}
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
                className={`flex gap-1.5 items-center ${boxPadding} px-2.5 rounded-md bg-muted border border-border/80 cursor-default`}
                style={{ fontSize: `${fontSize}px` }}
                whileTap={{ scale: 0.97 }}
            >
                {img && (
                    <Image
                        src={img}
                        alt={title}
                        width={fontSize} // Use text font size for small icons
                        height={fontSize}
                    />
                )}
                <strong className="text-muted-foreground" style={{ color: borderColor }}>
                    {title}
                </strong>
            </motion.div>
        );
    }

    // For skills section with hover effects
    return (
        <motion.div
            className={`
                flex flex-col justify-center items-center gap-2 ${boxPadding} rounded-lg 
                text-center border border-border/60 h-full cursor-pointer 
                bg-secondary ${baseShadowClass}
                transition-all duration-200 ease-out 
            `}
            whileHover={{
                scale: 1.08,
                boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 3px ${onAnimationBackgroundColor || 'hsl(var(--secondary))'}`, // Tailwind shadow-xl + custom ring
                backgroundColor: onAnimationBackgroundColor || 'hsl(var(--secondary))',
            }}
            whileTap={{ scale: 0.95 }}
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