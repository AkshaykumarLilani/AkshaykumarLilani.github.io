"use client";

import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import TechnologyBox from '@/components/common/TechnologyBox';
import { allTechsSameColor } from '@/utilities/allTechs';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { useTheme } from 'next-themes';

const technologies = [
    allTechsSameColor.mongodb,
    allTechsSameColor.express,
    allTechsSameColor.react,
    allTechsSameColor.nodejs,
    allTechsSameColor.nextjs,
    allTechsSameColor.antdesign,
    allTechsSameColor.redux,
    allTechsSameColor.bootstrap,
    allTechsSameColor.django_rest,
    allTechsSameColor.postgres,
    allTechsSameColor.python,
    allTechsSameColor.aws,
    allTechsSameColor.docker,
    allTechsSameColor.ejs,
    allTechsSameColor.html,
    allTechsSameColor.css,
    allTechsSameColor.javascript,
    allTechsSameColor.s3,
    allTechsSameColor.pinescript,
    allTechsSameColor.ubuntu,
    allTechsSameColor.git,
    allTechsSameColor.tailwind
];

const categorizedSkills = {
    "Frontend": [allTechsSameColor.react, allTechsSameColor.nextjs, allTechsSameColor.javascript, allTechsSameColor.html, allTechsSameColor.css, allTechsSameColor.tailwind, allTechsSameColor.redux, allTechsSameColor.antdesign, allTechsSameColor.bootstrap],
    "Backend": [allTechsSameColor.nodejs, allTechsSameColor.express, allTechsSameColor.python, allTechsSameColor.django_rest],
    "Databases": [allTechsSameColor.mongodb, allTechsSameColor.postgres],
    "DevOps & Tools": [allTechsSameColor.git, allTechsSameColor.docker, allTechsSameColor.aws, allTechsSameColor.s3, allTechsSameColor.ubuntu],
    "Specialized": [allTechsSameColor.pinescript,]
}

const prominentTechTitles = [];

function SkillsSection() {
    const currentWidth = useWindowWidth();
    const [gridColumns, setGridColumns] = useState(8);
    const { theme } = useTheme();

    useEffect(() => {
        console.log({ currentWidth })
        if (currentWidth < 450) {
            setGridColumns(2);
        } else if (currentWidth < 600) {
            setGridColumns(3);
        } else if (currentWidth < 720) {
            setGridColumns(4);
        } else if (currentWidth < 992) {
            setGridColumns(6);
        } else if (currentWidth < 1120) {
            setGridColumns(8);
        } else {
            setGridColumns(8);
        }
    }, [currentWidth]);

    return (
        <section key={`${theme}-skills`} className="w-full p-3 py-md-5 flex flex-col gap-3 justify-center items-start" id="skills">
            <SectionTitle title={`My Tech Stack`} />
            {Object.entries(categorizedSkills).map(([category, techs]) => (
                techs.length > 0 && ( // Only render category if it has skills
                    <div key={category} className="mb-8 w-full">
                        <h4 className="text-xl font-semibold text-primary mb-4 mt-6">{category}</h4>
                        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
                            {techs.map((tech, index) => (
                                <div
                                    key={`<span class="math-inline">\{category\}\-</span>{tech.title}-${index}`}
                                    className={
                                        (currentWidth >= 992 && prominentTechTitles.includes(tech.title))
                                            ? 'md:col-span-2'
                                            : 'col-span-1'
                                    }
                                >
                                    <TechnologyBox {...tech} inSkillsSection={true} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </section>
    );
}

export default SkillsSection;
