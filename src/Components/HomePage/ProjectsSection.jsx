import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import { allTechsSameColor } from '../../Utilities/allTechs'
import ProjectCard from '../ProjectCard'
import { project_BigBasketClone, project_LetsCamp, project_OnlineBiCycleShop } from '../../assets'
import styles from "./ProjectSection.module.css";

const allTechs = allTechsSameColor;

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
        title: "Big Basket Clone",
        description: "FrontEnd Clone of a popular grocery shopping website: BigBasket. Built using HTML, CSS & Javascript.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/big-basket-clone",
        deployedLink: "https://visionary-smakager-639150.netlify.app/",
        image: project_BigBasketClone
    },
]

function ProjectsSection() {
    return (
        <section className='max-width-desktop mx-auto d-flex flex-column gap-4 justify-content-start align-items-start py-2 my-5 p-3 py-md-5' id='projects'>
            <div>
                <SectionTitle title={`Projects`} />
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