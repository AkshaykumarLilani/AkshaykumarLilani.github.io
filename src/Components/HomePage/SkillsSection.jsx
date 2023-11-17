import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import TechnologyBox from '../Common/TechnologyBox';
import { allTechs } from '../../Utilities/allTechs';

const technologies = [
    [allTechs.react, allTechs.redux, allTechs.bootstrap],
    [allTechs.express, allTechs.django_rest, allTechs.ejs],
    [allTechs.mongodb, allTechs.postgres],
    [allTechs.nodejs, allTechs.python, allTechs.javascript, allTechs.html, allTechs.css],
    [allTechs.aws, allTechs.s3, allTechs.netlify],
    [allTechs.docker, allTechs.ubuntu, allTechs.git]
]

function SkillsSection() {

    return (
        <section className='max-width-desktop min-height-section mx-auto d-flex flex-column gap-5 justify-content-center align-items-start py-2 my-5' id='skills'>
            <div>
                <SectionTitle title={`Technologies I have used`} />
            </div>
            <div className='d-flex flex-column gap-3'>
                {technologies.map((t, i) => <div className='d-flex gap-3' key={i + 'tec'}>
                    {
                        t.map((tech, index) => <TechnologyBox key={index} backgroundColor={tech.backgroundColor} borderColor={tech.borderColor} img={tech.img} title={tech.title} />)
                    }
                </div>)}
            </div>
        </section>
    )
}

export default SkillsSection;