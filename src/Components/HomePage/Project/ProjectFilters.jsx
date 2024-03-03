import React, { useState } from 'react'
import styles from "./ProjectFilters.module.css";

export const PROJECT_CATEGORIES = {
    "ALL": "ALL",
    "FRONTEND": "Frontend",
    "FULLSTACK": "Full Stack",
    "PINESCRIPT": "Pine Script"
}

const ProjectFilters = ({ onChange }) => {

    const [currentFilter, setCurrentFilter] = useState(PROJECT_CATEGORIES.ALL)

    const onFilterSelect = (e) => {
        let chosenFilter = e.target?.getAttribute?.('data-category');
        if (!chosenFilter){
            chosenFilter = PROJECT_CATEGORIES.ALL;
        }
        setCurrentFilter(PROJECT_CATEGORIES[chosenFilter]);
        if (typeof onChange === "function"){
            onChange(PROJECT_CATEGORIES[chosenFilter]);
        }
    }

    return (
        <div className={`d-flex justify-content-center align-items-center gap-2 ${styles['container']}`} onClick={onFilterSelect}>
            {
                Object.keys(PROJECT_CATEGORIES).map((category, index) => {
                    return (
                        <div
                            key={index}
                            data-category={category}
                            className={`${styles['filter']} ${currentFilter === PROJECT_CATEGORIES[category] ? styles['active'] : ''}`}
                        >
                            {PROJECT_CATEGORIES[category]}
                        </div>)
                })
            }
        </div>
    )
}

export default ProjectFilters