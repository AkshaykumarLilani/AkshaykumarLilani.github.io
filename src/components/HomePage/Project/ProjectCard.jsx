"use client";

import React from 'react';
import styles from './ProjectCard.module.css';
import TechnologyBox from '@/components/common/TechnologyBox';
import { project_githubLogo, project_gotoLink } from '@/assets';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';


const startBoxShadow = '0px 4px 4px 0px rgba(0, 0, 0, 0.19)';
const stopBoxShadow = '0px 4px 4px 4px #0077d433';

const startPointAnimation = {
    from: {
        scale: 1,
        boxShadow: startBoxShadow,
    },
};

function ProjectCard({
    title,
    description,
    techStack,
    githubRepositoryLink,
    deployedLink,
    image,
}) {
    const [springs_live_website, api_lw] = useSpring(() => startPointAnimation);
    const [springs_git_link, api_git] = useSpring(() => startPointAnimation);

    const startAnimation = (a) => {
        a.start({
            from: {
                boxShadow: startBoxShadow,
            },
            to: {
                boxShadow: stopBoxShadow,
            },
        });
    };

    const stopAnimation = (a) => {
        a.start({
            from: {
                boxShadow: stopBoxShadow,
            },
            to: {
                boxShadow: startBoxShadow,
            },
        });
    };

    return (

        <div
            className={
                styles['project-card'] +
                ' ' +
                'flex flex-col justify-between gap-3 rounded-lg border border-primary'
            }
        >
            <div className="flex flex-col">
                <div className="mb-2">
                    <Image
                        src={image}
                        alt=""
                        className={styles['project-img'] + ' rounded-lg border border-primary'}
                    />
                </div>
                <h5 className="mb-2 text-foreground text-xl">{title}</h5>
                <p className="mb-0">{description}</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 flex-wrap">
                    {Array.isArray(techStack) &&
                        techStack.map((tech, index) => (
                            <TechnologyBox
                                key={index}
                                {...tech}
                                backgroundColor={'white'}
                                fontSize={14}
                            />
                        ))}
                </div>
                <div className="flex justify-between items-center w-full">
                    {githubRepositoryLink ? (
                        <animated.a
                            href={githubRepositoryLink}
                            target="_blank"
                            rel="noreferrer"
                            className={
                                styles['github-deploy-link'] +
                                ' flex justify-between items-center gap-2 border border-primary'
                            }
                            style={{
                                ...springs_git_link,
                            }}
                            onMouseEnter={() => startAnimation(api_git)}
                            onMouseLeave={() => stopAnimation(api_git)}
                        >
                            <span>Github Repo</span>
                            <Image
                                src={project_githubLogo}
                                alt="Github Repo Link"
                            />
                        </animated.a>
                    ) : (
                        <div></div>
                    )}

                    <animated.a
                        href={deployedLink}
                        target="_blank"
                        rel="noreferrer"
                        className={
                            styles['github-deploy-link'] +
                            ' flex justify-between items-center gap-2 border border-primary'
                        }
                        style={{
                            ...springs_live_website,
                        }}
                        onMouseEnter={() => startAnimation(api_lw)}
                        onMouseLeave={() => stopAnimation(api_lw)}
                    >
                        <span>View Live</span>
                        <Image src={project_gotoLink} alt="Github Repo Link" />
                    </animated.a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
