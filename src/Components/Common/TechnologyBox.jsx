"use client";

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { allTechs } from '@/utilities/allTechs';
import getRandomNumber from '@/utilities/getRandomNumber';
import Image from 'next/image';
import useWindowWidth from '@/lib/hooks/use-window-width';

const possibleTitles = Object.keys(allTechs).map((a) => allTechs[a].title);

function TechnologyBox({
    img,
    title,
    borderColor,
    backgroundColor,
    inSkillsSection,
    onAnimationBackgroundColor,
    fontSize,
    gridColumns,
}) {
    const [spanTwoTechTitles, setSpanTowTechTitle] = useState([
        'React',
        'ExpressJs',
        'MongoDB',
        'NodeJs',
    ]);
    const currentWidth = useWindowWidth();

    const [springs, api] = useSpring(() => ({
        from: { backgroundColor: backgroundColor, scale: 1 },
    }));

    const startAnimation = () => {
        api.start({
            from: {
                backgroundColor: backgroundColor,
                scale: 1,
            },
            to: {
                backgroundColor: onAnimationBackgroundColor,
                scale: 1.1,
            },
        });
    };

    const stopAnimation = () => {
        api.start({
            from: {
                backgroundColor: onAnimationBackgroundColor,
                scale: 1.1,
            },
            to: {
                backgroundColor: backgroundColor,
                scale: 1,
            },
        });
    };

    if (!inSkillsSection) {
        if (!img) {
            if (title === 'EJS') {
                return (
                    <div
                        className="flex gap-2 p-2 px-3 rounded-lg"
                        style={{
                            backgroundColor: `${backgroundColor}`,
                            fontSize: fontSize,
                        }}
                    >
                        <div style={{ color: borderColor }}>
                            <strong>
                                {'<%= '}{title}{' %>'}
                            </strong>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div
                className="flex gap-2 p-2 px-3 rounded-lg border border-primary"
                style={{
                    backgroundColor: `${backgroundColor}`,
                    fontSize: fontSize,
                }}
            >
                <Image
                    src={img}
                    alt={title}
                    style={{ fill: borderColor, width: fontSize }}
                />
                <div style={{ color: borderColor }}>
                    <strong>{title}</strong>
                </div>
            </div>
        );
    } else {
        if (!img) {
            if (title === 'EJS') {
                return null;
            }
        }

        const getGridSpan = (t) => {
            let containsTitle = spanTwoTechTitles.includes(t);
            if (containsTitle) {
                if (currentWidth < 992) {
                    return 'col-span-1';
                } else {
                    return 'col-span-2';
                }
            } else {
                return 'col-span-1';
            }
        };

        const getImageWidth = (t) => {
            if (gridColumns === 8) {
                if (spanTwoTechTitles.includes(title)) {
                    return 80;
                } else {
                    return 70;
                }
            } else if (gridColumns === 3) {
                return 30;
            } else {
                return 40;
            }
        };

        return (
            <animated.div
                className="flex flex-col justify-center items-center gap-2 p-3"
                onMouseEnter={startAnimation}
                onMouseLeave={stopAnimation}
                style={{
                    borderRadius: '15px',
                    backgroundColor: `${backgroundColor}`,
                    fontSize: fontSize,
                    opacity: 0.8,
                    // gridColumn: getGridSpan(title),
                    ...springs,
                }}
            >
                <Image
                    src={img}
                    alt={title}
                    style={{
                        fill: borderColor,
                        width: getImageWidth(title),
                    }}
                />
                <div className='text-foreground'>
                    <strong>{title}</strong>
                </div>
            </animated.div>
        );
    }
}

export default TechnologyBox;
