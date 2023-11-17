import React from 'react';
import styles from "./ProjectCard.module.css";
import TechnologyBox from './Common/TechnologyBox';
import { project_githubLogo, project_gotoLink } from '../assets';

function ProjectCard({ title, description, techStack, githubRepositoryLink, deployedLink, image }) {
    return (
        <div className={styles['project-card'] + " " + "d-flex flex-column gap-3"}>
            <div>
                <img src={image} alt="" className={styles['project-img'] + " "} />
            </div>
            <h5 className='mb-0'>{title}</h5>
            <p className='mb-0'>{description}</p>
            <div className='d-flex gap-2 flex-wrap'>
                {
                    Array.isArray(techStack) && techStack.map((tech, index) => <TechnologyBox key={index} {...tech} />)
                }
            </div>
            <div className='d-flex justify-content-between align-items-center w-100'>
                <a href={githubRepositoryLink} target='_blank' rel='noreferrer' className={styles['github-deploy-link']+" d-flex justify-content-between align-items-center gap-2"}>
                    <span>View Github Repo</span>
                    <img src={project_githubLogo} alt="Github Repo Link" />
                </a>
                <a href={deployedLink} target='_blank' rel='noreferrer' className={styles['github-deploy-link']+" d-flex justify-content-between align-items-center gap-2"}>
                    <span>View Live</span>
                    <img src={project_gotoLink} alt="Github Repo Link" />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard