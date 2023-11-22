import React from 'react'
import { useSpring, animated } from '@react-spring/web'

function TechnologyBox({ img, title, borderColor, backgroundColor, inSkillsSection, onAnimationBackgroundColor }) {
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
                scale: 1.2
            },
        })
    }

    const stopAnimation = () => {
        api.start({
            from: {
                backgroundColor: onAnimationBackgroundColor,
                scale: 1.2
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
                    style={{ borderRadius: 10, border: `2px solid ${borderColor}`, backgroundColor: `${backgroundColor}` }}
                >
                    <div style={{ color: borderColor }}><strong>{"<%= "}{title}{" %>"}</strong></div>
                </div>;
            }
        }

        return (
            <div
                className='d-flex gap-2 p-1 px-2'
                style={{ borderRadius: 10, border: `2px solid ${borderColor}`, backgroundColor: `${backgroundColor}` }}
            >
                <img src={img} alt={title} style={{ fill: borderColor }} />
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
                style={{ borderRadius: 10, border: `2px solid ${borderColor}`, backgroundColor: `${backgroundColor}`, ...springs }}
            >
                <img src={img} alt={title} style={{ fill: borderColor, width: 40 }} />
                <div style={{ color: borderColor }}><strong>{title}</strong></div>
            </animated.div>
        )
    }
}

export default TechnologyBox