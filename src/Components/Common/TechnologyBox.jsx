import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useCurrentWidth } from 'react-socks';

function TechnologyBox({ img, title, borderColor, backgroundColor, inSkillsSection, onAnimationBackgroundColor, fontSize }) {
    const spanTwoTechTitles = ["React", "Express", "MongoDB", "NodeJs", "Postgres",  "Git"];
    const currentWidth = useCurrentWidth();
    

    const [springs, api] = useSpring(() => ({
        from: { backgroundColor: backgroundColor, scale: 1 },
    }));

    const startAnimation = () => {
        api.start({
            from: {
                backgroundColor: backgroundColor,
                scale: 1
            },
            to: {
                backgroundColor: onAnimationBackgroundColor,
                scale: 1.1
            },
        })
    }

    const stopAnimation = () => {
        api.start({
            from: {
                backgroundColor: onAnimationBackgroundColor,
                scale: 1.1
            },
            to: {
                backgroundColor: backgroundColor,
                scale: 1
            },
        })
    }

    if (!inSkillsSection) {

        if (!img) {
            if (title === "EJS") {
                return <div
                    className='d-flex gap-2 p-1 px-2'
                    style={{ 
                        borderRadius: 10, 
                        // border: `2px solid ${borderColor}`, 
                        backgroundColor: `${backgroundColor}`, 
                        fontSize: fontSize }}
                >
                    <div style={{ color: borderColor }}><strong>{"<%= "}{title}{" %>"}</strong></div>
                </div>;
            }
        }

        return (
            <div
                className='d-flex gap-2 p-1 px-2'
                style={{ 
                    borderRadius: 10, 
                    // border: `2px solid ${borderColor}`, 
                    backgroundColor: `${backgroundColor}`, 
                    fontSize: fontSize }}
            >
                <img src={img} alt={title} style={{ fill: borderColor, width: fontSize }} />
                <div style={{ color: borderColor }}><strong>{title}</strong></div>
            </div>
        )
    } else {
        if (!img) {
            if (title === "EJS") {
                return null;
                return <div
                    className='d-flex flex-column gap-2 p-1 px-2'
                    style={{ borderRadius: 10, border: `2px solid ${borderColor}`, backgroundColor: `${backgroundColor}` }}
                >
                    <div style={{ color: borderColor }}><strong>{"<%= "}{title}{" %>"}</strong></div>
                </div>;
            }
        }

        return (
            <animated.div
                className='d-flex flex-column justify-content-center align-items-center gap-2 p-3'
                onMouseEnter={startAnimation}
                onMouseLeave={stopAnimation}
                style={{
                    borderRadius: 15,
                    // border: `2px solid ${borderColor}`,
                    backgroundColor: `${backgroundColor}`,
                    fontSize: fontSize,
                    opacity: 0.8,
                    gridColumn: spanTwoTechTitles.includes(title) ? currentWidth < 1120 ? "span 1" : "span 2" : "span 1",
                    ...springs
                }}
            >
                <img src={img} alt={title} style={{ 
                    fill: borderColor, 
                    width: spanTwoTechTitles.includes(title) ? 80 : 70 }} />
                {
                    spanTwoTechTitles.includes(title) ? null : <div style={{ color: borderColor }}>
                        <strong>{title}</strong>
                    </div>
                }

            </animated.div>
        )
    }
}

export default TechnologyBox