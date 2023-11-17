import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import { allTechs } from '../../Utilities/allTechs'
import ProjectCard from '../ProjectCard'
import { project_LetsCamp, project_OnlineBiCycleShop } from '../../assets'
import styles from "./ProjectSection.module.css";

const projects = [
    {
        title: "LetsCamp",
        description: "A Full Stack Campgrounds Booking Project using MongoDB, Express, EJS.",
        techStack: [allTechs.mongodb, allTechs.express, allTechs.ejs, allTechs.aws, allTechs.nodejs, allTechs.bootstrap],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app",
        image: project_LetsCamp
    },
    {
        title: "LetsCamp",
        description: "A Full Stack Campgrounds Booking Project using MongoDB, Express, EJS.",
        techStack: [allTechs.mongodb, allTechs.express, allTechs.ejs, allTechs.aws, allTechs.nodejs, allTechs.bootstrap],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app",
        image: project_LetsCamp
    },

    {
        title: "OnlineBiCycleShop",
        description: "BiCycle Shopping website built using HTML, CSS, JavaScript on Frontend and JSON Server as Backend.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app",
        image: project_OnlineBiCycleShop
    },
    {
        title: "OnlineBiCycleShop",
        description: "BiCycle Shopping website built using HTML, CSS, JavaScript on Frontend and JSON Server as Backend.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app",
        image: project_OnlineBiCycleShop
    },
]

function ProjectsSection() {
    return (
        <section className='max-width-desktop mx-auto d-flex flex-column gap-4 justify-content-start align-items-start py-2 my-5' id='projects'>
            <div>
                <SectionTitle title={`Selected Projects`} />
            </div>
            <div className={styles['projects-container']}>
                {
                    projects?.map((project, index) => <ProjectCard key={index} {...project} />)
                }
            </div>
        </section>
    )
}

export default ProjectsSection