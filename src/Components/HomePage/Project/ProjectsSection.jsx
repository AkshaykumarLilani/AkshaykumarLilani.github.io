import React, { useState } from 'react'
import SectionTitle from '../../Common/SectionTitle'
import { allTechsSameColor } from '../../../Utilities/allTechs'
import ProjectCard from './ProjectCard'
import { project_BigBasketClone, project_InventoryManagement, project_LetsCamp, project_LibraryManager, project_OnlineBiCycleShop, project_TimeAndSalesWindow } from '../../../assets'
import styles from "./ProjectsSection.module.css";
import ProjectFilters, { PROJECT_CATEGORIES } from './ProjectFilters'

const allTechs = allTechsSameColor;

const projects = [
    {
        title: "Library Manager",
        description: "A web interface with secure APIs, protected by JWT authentication and role-based access control, for efficient book management.",
        techStack: [allTechs.mongodb, allTechs.react, allTechs.redux, allTechs.express, allTechs.nodejs, allTechs.antdesign],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/library_manager",
        deployedLink: "https://singular-panda-c399c9.netlify.app/",
        image: project_LibraryManager,
        category: PROJECT_CATEGORIES.FULLSTACK
    },
    {
        title: "Inventory Management",
        description: "React-based Inventory Management Web App with Ant Design, Bootstrap, and Redux for frontend. Backend powered by ExpressJS and MongoDB.",
        techStack: [allTechs.mongodb, allTechs.react, allTechs.redux, allTechs.express, allTechs.nodejs, allTechs.bootstrap, allTechs.antdesign],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/inventory-management",
        deployedLink: "https://akshay-u7-cw.netlify.app",
        image: project_InventoryManagement,
        category: PROJECT_CATEGORIES.FULLSTACK
    },
    {
        title: "LetsCamp",
        description: "A comprehensive full-stack campgrounds booking project leveraging MongoDB for the database, Express for the backend framework, and EJS for dynamic templating on the frontend.",
        techStack: [allTechs.mongodb, allTechs.express, allTechs.ejs, allTechs.aws, allTechs.nodejs, allTechs.bootstrap],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/letscamp",
        deployedLink: "https://letscamp.akshaylilani.com",
        image: project_LetsCamp,
        category: PROJECT_CATEGORIES.FULLSTACK
    },
    {
        title: "OnlineBiCycleShop",
        description: "BiCycle Shopping website built using HTML, CSS, JavaScript on Frontend and JSON Server as Backend.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app",
        image: project_OnlineBiCycleShop,
        category: PROJECT_CATEGORIES.FRONTEND
    },
    {
        title: "Big Basket Clone",
        description: "FrontEnd Clone of a popular grocery shopping website: BigBasket. Built using HTML, CSS & Javascript.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/big-basket-clone",
        deployedLink: "https://visionary-smakager-639150.netlify.app/",
        image: project_BigBasketClone,
        category: PROJECT_CATEGORIES.FRONTEND
    },

    {
        title: "Time And Sales Window",
        description: "An open-source PineScript Indicator for TradingView that displays real-time tick data during market hours. Color-coded for quick analysis: red for lower prices, gray for unchanged, and green for higher prices. No historical data storage.",
        techStack: [allTechs.pinescript],
        deployedLink: "https://in.tradingview.com/script/SofuBwAz-Time-and-Sales/",
        image: project_TimeAndSalesWindow,
        category: PROJECT_CATEGORIES.PINESCRIPT
    },
]

function ProjectsSection() {

    const [projectsToShow, setProjectsToShow] = useState(projects);

    const onFilterChange = (value) => {
        if (value === PROJECT_CATEGORIES.ALL){
            setProjectsToShow(projects)
        } else {
            let newProjects = projects.filter(p => (p.category === value));
            setProjectsToShow(newProjects);
        }
    }

    return (
        <section className='max-width-desktop mx-auto d-flex flex-column gap-4 justify-content-start align-items-start py-2 my-5 p-3 py-md-5' id='projects'>
            <div className='d-flex flex-column flex-sm-row justify-content-between w-100'>
                <SectionTitle title={`Sample Projects`} />
                <ProjectFilters
                    onChange={onFilterChange}
                />
            </div>
            <div className={styles['projects-container']}>
                {
                    projectsToShow?.map((project, index) => <ProjectCard key={index} {...project} />)
                }
            </div>
        </section>
    )
}

export default ProjectsSection