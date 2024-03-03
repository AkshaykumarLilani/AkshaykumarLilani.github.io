import React from 'react';
import styles from "./ProjectCard.module.css";
import TechnologyBox from '../../Common/TechnologyBox';
import { project_githubLogo, project_gotoLink } from '../../../assets';
import { useSpring, animated } from '@react-spring/web';

const startBoxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.19)";
const stopBoxShadow = "0px 4px 4px 4px #0077d433";

const startPointAnimation = {
    from: {
        scale: 1,
        boxShadow: startBoxShadow
    }
}

function ProjectCard({ title, description, techStack, githubRepositoryLink, deployedLink, image }) {

    const [springs_live_website, api_lw] = useSpring(() => startPointAnimation);
    const [springs_git_link, api_git] = useSpring(() => startPointAnimation);

    const startAnimation = (a) => {
        a.start({
            from: {
                boxShadow: startBoxShadow
            },
            to: {
                boxShadow: stopBoxShadow
            }
        })
    }

    const stopAnimation = (a) => {
        a.start({
            from: {
                boxShadow: stopBoxShadow
            },
            to: {
                boxShadow: startBoxShadow
            }
        })
    }

    return (
        <div className={styles['project-card'] + " " + "d-flex flex-column justify-content-between gap-3"}>
            <div className='d-flex flex-column'>
                <div className='mb-2'>
                    <img src={image} alt="" className={styles['project-img'] + " "} />
                </div>
                <h5 className='mb-2 color-accent'>{title}</h5>
                <p className='mb-0'>{description}</p>
            </div>
            <div className='d-flex flex-column gap-3'>
                <div className='d-flex gap-2 flex-wrap'>
                    {
                        Array.isArray(techStack) && techStack.map((tech, index) => <TechnologyBox key={index} {...tech} backgroundColor={"white"} fontSize={14} />)
                    }
                </div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    {
                        githubRepositoryLink ?
                            <animated.a href={githubRepositoryLink} target='_blank' rel='noreferrer' className={styles['github-deploy-link'] + " d-flex justify-content-between align-items-center gap-2"}
                                style={{
                                    ...springs_git_link
                                }}
                                onMouseEnter={() => startAnimation(api_git)}
                                onMouseLeave={() => stopAnimation(api_git)}
                            >
                                <span>Github Repo</span>
                                <img src={project_githubLogo} alt="Github Repo Link" />
                            </animated.a>
                            : <div></div>
                    }

                    <animated.a href={deployedLink} target='_blank' rel='noreferrer' className={styles['github-deploy-link'] + " d-flex justify-content-between align-items-center gap-2"}
                        style={{
                            ...springs_live_website
                        }}
                        onMouseEnter={() => startAnimation(api_lw)}
                        onMouseLeave={() => stopAnimation(api_lw)}
                    >
                        <span>View Live</span>
                        <img src={project_gotoLink} alt="Github Repo Link" />
                    </animated.a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard