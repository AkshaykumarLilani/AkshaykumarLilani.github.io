import React, { useEffect, useState } from 'react'
import SectionTitle from '../Common/SectionTitle'
import TechnologyBox from '../Common/TechnologyBox';
import { allTechsSameColor } from '../../Utilities/allTechs';
import { useCurrentWidth } from 'react-socks';

// const technologies = [
//     [allTechsSameColor.react, allTechsSameColor.redux, allTechsSameColor.bootstrap],
//     [allTechsSameColor.express, allTechsSameColor.django_rest, allTechsSameColor.ejs],
//     [allTechsSameColor.mongodb, allTechsSameColor.postgres],
//     [allTechsSameColor.nodejs, allTechsSameColor.python, allTechsSameColor.javascript, allTechsSameColor.html, allTechsSameColor.css],
//     [allTechsSameColor.aws, allTechsSameColor.s3, allTechsSameColor.netlify],
//     [allTechsSameColor.docker, allTechsSameColor.ubuntu, allTechsSameColor.git]
// ]

const technologies = [
    [
        allTechsSameColor.mongodb,
        allTechsSameColor.express,
        allTechsSameColor.react,
        allTechsSameColor.nodejs, 
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
        allTechsSameColor.netlify,
        allTechsSameColor.ubuntu, 
        allTechsSameColor.git
    ]
]

function SkillsSection() {
    const currentWidth = useCurrentWidth();
    const [gridColumns, setGridColumns] = useState(8);

    useEffect(() => {
        if (currentWidth < 580) {
            setGridColumns(3);
        } else if (currentWidth < 720) {
            setGridColumns(4);
        } else if (currentWidth < 992) {
            setGridColumns(6);
        }else if (currentWidth < 1120) {
            setGridColumns(8);
        }
    }, [currentWidth]);

    return (
        <section className='max-width-desktop min-height-section mx-auto d-flex flex-column gap-3 justify-content-center align-items-start py-2 pb-5 my-5' id='skills'>
            <div>
                <SectionTitle title={`Technologies I have used`} />
            </div>
            <div className='d-flex flex-column flex-wrap gap-3'>
                {technologies.map((t, i) => <div
                    // className='d-flex flex-wrap gap-3' 
                    style={{ display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: 20 }}
                    key={i + 'tec'}>
                    {
                        t.map((tech, index) => <TechnologyBox key={index} {...tech} inSkillsSection={true} />)
                    }
                </div>)}
            </div>
        </section>
    )
}

export default SkillsSection;