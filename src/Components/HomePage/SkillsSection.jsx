import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import TechnologyBox from '../Common/TechnologyBox';
import { allTechsSameColor } from '../../Utilities/allTechs';

// const technologies = [
//     [allTechsSameColor.react, allTechsSameColor.redux, allTechsSameColor.bootstrap],
//     [allTechsSameColor.express, allTechsSameColor.django_rest, allTechsSameColor.ejs],
//     [allTechsSameColor.mongodb, allTechsSameColor.postgres],
//     [allTechsSameColor.nodejs, allTechsSameColor.python, allTechsSameColor.javascript, allTechsSameColor.html, allTechsSameColor.css],
//     [allTechsSameColor.aws, allTechsSameColor.s3, allTechsSameColor.netlify],
//     [allTechsSameColor.docker, allTechsSameColor.ubuntu, allTechsSameColor.git]
// ]

const technologies = [
    [allTechsSameColor.react, allTechsSameColor.redux, allTechsSameColor.bootstrap, allTechsSameColor.express, allTechsSameColor.django_rest, allTechsSameColor.ejs,
    allTechsSameColor.mongodb, allTechsSameColor.postgres,
    allTechsSameColor.nodejs, allTechsSameColor.python, allTechsSameColor.javascript, allTechsSameColor.html, allTechsSameColor.css,
    allTechsSameColor.aws, allTechsSameColor.s3, allTechsSameColor.netlify,
    allTechsSameColor.docker, allTechsSameColor.ubuntu, allTechsSameColor.git]
]

function SkillsSection() {

    return (
        <section className='max-width-desktop min-height-section mx-auto d-flex flex-column gap-5 justify-content-center align-items-start py-2 my-5' id='skills'>
            <div>
                <SectionTitle title={`Technologies I have used`} />
            </div>
            <div className='d-flex flex-column flex-wrap gap-3'>
                {technologies.map((t, i) => <div className='d-flex flex-wrap gap-3' key={i + 'tec'}>
                    {
                        t.map((tech, index) => <TechnologyBox key={index} {...tech} inSkillsSection={true}/>)
                    }
                </div>)}
            </div>
        </section>
    )
}

export default SkillsSection;