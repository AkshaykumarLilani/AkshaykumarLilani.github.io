import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useCurrentWidth } from 'react-socks';
import { allTechs } from '../../Utilities/allTechs';
import getRandomNumber from '../../Utilities/getRandomNumber';

const possibleTitles = Object.keys(allTechs).map(a => allTechs[a].title);

function TechnologyBox({ img, title, borderColor, backgroundColor, inSkillsSection, onAnimationBackgroundColor, fontSize, gridColumns }) {
    const [spanTwoTechTitles, setSpanTowTechTitle] = useState(["React", "ExpressJs", "MongoDB", "NodeJs"]);
    const currentWidth = useCurrentWidth();

    const [springs, api] = useSpring(() => ({
        from: { backgroundColor: backgroundColor, scale: 1 },
    }));

    // useEffect(()=>{
    //     const changeSpanTwoTechTitles = () =>{
    //         // select random 4
    //         let newArray = []
            
    //         while (true){

    //             const randomIndex = getRandomNumber(0, possibleTitles.length);

    //             newArray.push(possibleTitles[randomIndex]);

    //             if (newArray.length === 4){
    //                 break;
    //             }
    //         }
    //         console.log({newArray, possibleTitles})
    //         setSpanTowTechTitle(newArray);
    //     }

    //     let intervalId = setInterval(changeSpanTwoTechTitles, 5000);

    //     return () => clearInterval(intervalId);
    // }, []);

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
                        fontSize: fontSize
                    }}
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
                    fontSize: fontSize
                }}
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

        const getGridSpan = (t) => {
            let containsTitle = spanTwoTechTitles.includes(t);
            if (containsTitle) {
                if (currentWidth < 992) {
                    return "span 1";
                } else {
                    return "span 2";
                }
            } else {
                return "span 1";
            }
        }

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
                    gridColumn: getGridSpan(title),
                    ...springs
                }}
            >
                <img src={img} alt={title} style={{
                    fill: borderColor,
                    width: getImageWidth(title)
                }} />
                {/* {
                    spanTwoTechTitles.includes(title) ? null : <div style={{ color: borderColor }}>
                        <strong>{title}</strong>
                    </div>
                } */}
                <div style={{ color: borderColor }}>
                    <strong>{title}</strong>
                </div>

            </animated.div>
        )
    }
}

export default TechnologyBox