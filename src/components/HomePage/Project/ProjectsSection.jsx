"use client";

import React, { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { allTechsSameColor } from '@/utilities/allTechs';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';
import ProjectFilters from './ProjectFilters';
import projects, { PROJECT_CATEGORIES } from '@/lib/data/projects';

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
            className="flex flex-col gap-4 justify-start items-start py-2 my-5 p-3 md:py-5"
            id="projects"
        >
            <div className="flex flex-col sm:flex-row justify-between w-full">
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
