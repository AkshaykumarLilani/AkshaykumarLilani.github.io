import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import { allTechsSameColor } from '../../../Utilities/allTechs';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';
import ProjectFilters from './ProjectFilters';
import projects, { PROJECT_CATEGORIES } from '../../../data/projects';

function ProjectsSection() {
    const [projectsToShow, setProjectsToShow] = useState(projects);

    const onFilterChange = (value) => {
        if (value === PROJECT_CATEGORIES.ALL) {
            setProjectsToShow(projects);
        } else {
            let newProjects = projects.filter((p) => p.category === value);
            setProjectsToShow(newProjects);
        }
    };

    return (
        <section
            className="max-width-desktop mx-auto d-flex flex-column gap-4 justify-content-start align-items-start py-2 my-5 p-3 py-md-5"
            id="projects"
        >
            <div className="d-flex flex-column flex-sm-row justify-content-between w-100">
                <SectionTitle title={`Sample Projects`} />
                <ProjectFilters onChange={onFilterChange} />
            </div>
            <div className={styles['projects-container']}>
                {projectsToShow?.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
