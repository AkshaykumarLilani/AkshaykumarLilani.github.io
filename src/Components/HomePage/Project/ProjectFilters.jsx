import React, { useState } from 'react'
import styles from "./ProjectFilters.module.css";
import { PROJECT_CATEGORIES, PROJECT_CATEGORIES_COUNT } from '../../../data/projects';

const ProjectFilters = ({ onChange }) => {

    const [currentFilter, setCurrentFilter] = useState(PROJECT_CATEGORIES.ALL)

    const onFilterSelect = (e) => {
        let chosenFilter = e.target?.getAttribute?.('data-category');
        if (!chosenFilter){
            return;
        }
        setCurrentFilter(PROJECT_CATEGORIES[chosenFilter]);
        if (typeof onChange === "function"){
            onChange(PROJECT_CATEGORIES[chosenFilter]);
        }
    }

    return (
        <div className={`d-flex justify-content-center flex-wrap align-items-center gap-2 ${styles['container']}`} onClick={onFilterSelect}>
            {
                Object.keys(PROJECT_CATEGORIES).map((category, index) => {
                    return (
                        <div
                            key={index}
                            data-category={category}
                            className={`${styles['filter']} ${currentFilter === PROJECT_CATEGORIES[category] ? styles['active'] : ''}`}
                        >
                            {PROJECT_CATEGORIES[category]}
                            <span className='ms-1'>({PROJECT_CATEGORIES_COUNT[category]})</span>
                        </div>)
                })
            }
        </div>
    )
}

export default React.memo(ProjectFilters)