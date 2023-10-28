import { skill_bootstrap, skill_django_rest, skill_docker, skill_express, skill_git, skill_mongodb, skill_nodejs, skill_react, skill_redux, skill_ubuntu } from "../../assets";
import css from "./SkillsSection.module.css";

const SkillsSection = () => {
    const skillsTop = [
        {name: "MongoDb", img: skill_mongodb},
        {name: "ExpressJs", img: skill_express},
        {name: "ReactJs", img: skill_react},
        {name: "Redux", img: skill_redux},
        {name: "NodeJs", img: skill_nodejs},
        {name: "DRF", img: skill_django_rest},
        {name: "Bootstrap", img: skill_bootstrap},
        {name: "Docker", img: skill_docker},
        {name: "Git", img: skill_git},
        {name: "Ubuntu", img: skill_ubuntu},
    ]

    return (
        <section id="skills" className="d-flex flex-column justify-content-center align-items-center gap-5 py-3">
            <h3 className="m-0">Skills</h3>
            <div className={"gap-3 "+css["skills-card-row"]}>
                {
                    skillsTop?.map((skill, index) => {
                        return <SkillCard key={index} img={skill.img} name={skill.name} />
                    })
                }
            </div>
        </section>);
}

const SkillCard = ({ img, name }) => {

    return (
        <div 
            style={{ border: "2px solid black", borderRadius: 10, maxWidth: 100 }} 
            className="d-flex flex-column justify-content-around gap-2 p-3 skills-card">
            <div>
                <img className="skills-card-img w-100" src={img} alt="" />
            </div>
            <div>
                <p className="skills-card-name mb-0 text-center">{name}</p>
            </div>
        </div>
    )
}

export default SkillsSection;