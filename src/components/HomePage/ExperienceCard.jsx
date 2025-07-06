"use client";

import React from 'react';
import TechnologyBox from '@/components/common/TechnologyBox';
import { animated, useSpring } from '@react-spring/web';
import { motion } from 'framer-motion'; // Import motion
import { formatExperienceDateRange } from '@/lib/dateUtils';

const cardBoxShadowEnter = '0px 8px 16px -4px hsl(var(--primary) / 0.3)';
const cardBoxShadowLeave = '0px 4px 6px -1px hsl(var(--foreground) / 0.07)';

function ExperienceCard({ company, role, startDate, endDate, responsibilities, technologiesUsed }) {
    const [hoverSprings, hoverApi] = useSpring(() => ({
        from: {
            transform: 'translateY(0px) scale(1)',
            boxShadow: cardBoxShadowLeave,
        },
        config: { tension: 280, friction: 20 },
    }));

    const [springs, api] = useSpring(() => ({
        from: {
            transform: 'translateY(0px) scale(1)',
            boxShadow: cardBoxShadowLeave,
        },
        config: { tension: 280, friction: 20 },
    }));

    const handleMouseEnter = () => {
        api.start({
            transform: 'translateY(-5px) scale(1.015)',
            boxShadow: cardBoxShadowEnter,
        });
    };

    const handleMouseLeave = () => {
        api.start({
            transform: 'translateY(0px) scale(1)',
            boxShadow: cardBoxShadowLeave,
        });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        }
    };

    const displayDates = formatExperienceDateRange(startDate, endDate);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <animated.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={springs} // Changed from hoverSprings to springs if that was the intent
                className="bg-secondary p-6 rounded-xl border border-border/60 shadow-sm"
            >
                <div className="mb-4 pb-3 border-b border-border/50">
                    <h3 className="text-2xl font-semibold text-primary mb-0.5">{role}</h3>
                    <p className="text-lg font-medium text-foreground">{company}</p>
                    {/* Use the dynamically formatted dates here */}
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{displayDates}</p>
                </div>
                <div className="mb-5">
                    <ul className="list-disc list-outside ml-5 text-foreground space-y-1.5 text-sm md:text-base">
                        {responsibilities.map((item, index) => (
                            <li key={`responsibility-${index}`} className="leading-relaxed">{item}</li>
                        ))}
                    </ul>
                </div>
                {technologiesUsed && technologiesUsed.length > 0 && (
                    <div>
                        <h4 className="text-base font-medium mb-2 text-foreground">Technologies Utilized:</h4>
                        <div className="flex flex-wrap gap-2">
                            {technologiesUsed.map((tech, index) => (
                                <TechnologyBox
                                    key={tech?.title || `tech-${index}`}
                                    {...tech}
                                    size="sm"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </animated.div>
        </motion.div>
    );
}

export default ExperienceCard;