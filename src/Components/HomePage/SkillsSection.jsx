import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import { tech_aws, tech_bootstrap, tech_css, tech_django_rest, tech_docker, tech_express, tech_git, tech_html, tech_javascript, tech_mongodb, tech_netlify, tech_nodejs, tech_postgres, tech_python, tech_react, tech_redux, tech_s3, tech_ubuntu } from '../../assets';
import TechnologyBox from '../Common/TechnologyBox';

const allTechs = {
    aws: {
        title: "AWS EC2",
        img: tech_aws,
        borderColor: 'rgba(245, 133, 54, 0.67)  ',
        backgroundColor: 'rgba(255, 204, 186, 0.46)'
    },
    bootstrap: {
        title: 'Bootstrap',
        img: tech_bootstrap,
        borderColor: 'rgba(111, 44, 246, 0.67)',
        backgroundColor: 'rgba(220, 203, 255, 0.46)'
    },
    css: {
        title: 'CSS',
        img: tech_css,
        borderColor: '#F0DB4F',
        backgroundColor: 'rgba(240, 219, 79, 0.46)'
    },
    django_rest: {
        title: 'Django Rest',
        img: tech_django_rest,
        borderColor: '#7F2D2D',
        backgroundColor: 'rgba(255, 218, 218, 0.46)'
    },
    docker: {
        title: 'Docker',
        img: tech_docker,
        borderColor: 'rgba(29, 99, 237, 0.67)',
        backgroundColor: 'rgba(154, 188, 255, 0.46)'
    },
    express: {
        title: 'Express',
        img: tech_express,
        borderColor: '#000',
        backgroundColor: 'rgba(192, 192, 192, 0.46)'
    },
    git: {
        title: 'Git',
        img: tech_git,
        borderColor: 'rgba(239, 71, 59, 0.67)',
        backgroundColor: 'rgba(245, 203, 200, 0.46)'
    },
    html: {
        title: 'HTML',
        img: tech_html,
        borderColor: '#F0DB4F',
        backgroundColor: 'rgba(240, 219, 79, 0.46)'
    },
    javascript: {
        title: 'JavaScript',
        img: tech_javascript,
        borderColor: '#F0DB4F',
        backgroundColor: 'rgba(240, 219, 79, 0.46)'
    },
    mongodb: {
        title: 'MongoDB',
        img: tech_mongodb,
        borderColor: 'rgba(2, 52, 48, 0.67)',
        backgroundColor: 'rgba(173, 255, 248, 0.46);'
    },
    netlify: {
        title: 'Netlify',
        img: tech_netlify,
        borderColor: 'rgba(50, 230, 226, 0.67)',
        backgroundColor: 'rgba(195, 252, 251, 0.46)'
    },
    nodejs: {
        title: 'NodeJs',
        img: tech_nodejs,
        borderColor: '#43853D',
        backgroundColor: 'rgba(157, 229, 150, 0.46)'
    },
    postgres: {
        title: 'Postgres',
        img: tech_postgres,
        borderColor: 'rgba(105, 158, 201, 0.67)',
        backgroundColor: 'rgba(186, 223, 253, 0.46)'
    },
    python: {
        title: 'Python',
        img: tech_python,
        borderColor: '#347AB4',
        backgroundColor: 'rgba(199, 229, 255, 0.46)'
    },
    react: {
        title: 'React',
        img: tech_react,
        borderColor: '#0077D4',
        backgroundColor: 'rgba(144, 205, 244, 0.46)'
    },
    redux: {
        title: 'Redux',
        img: tech_redux,
        borderColor: 'rgba(118, 74, 188, 0.67)',
        backgroundColor: 'rgba(215, 189, 255, 0.46)'
    },
    s3: {
        title: 'Amazon S3',
        img: tech_s3,
        borderColor: 'rgba(94, 31, 24, 0.67)',
        backgroundColor: 'rgba(255, 184, 176, 0.46)'
    },
    ubuntu: {
        title: 'Ubuntu',
        img: tech_ubuntu,
        borderColor: 'rgba(233, 84, 32, 0.67)',
        backgroundColor: 'rgba(255, 204, 186, 0.46)'
    }
}

const technologies = [
    [allTechs.react, allTechs.redux, allTechs.bootstrap],
    [allTechs.express, allTechs.django_rest],
    [allTechs.mongodb, allTechs.postgres],
    [allTechs.nodejs, allTechs.python, allTechs.javascript, allTechs.html, allTechs.css],
    [allTechs.aws, allTechs.s3, allTechs.netlify],
    [allTechs.docker, allTechs.ubuntu, allTechs.git]
]

function SkillsSection() {

    return (
        <section className='max-width-desktop mx-auto d-flex flex-column gap-4 justify-content-start align-items-start py-2 my-5'>
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