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
];

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
            <SectionTitle title={`Technologies I have used`} />
            <div className="w-full grid gap-4" style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
                {technologies.map((tech, index) => (
                    <TechnologyBox key={index + 'tec' + theme} {...tech} inSkillsSection={true} gridColumns={gridColumns} />
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;
