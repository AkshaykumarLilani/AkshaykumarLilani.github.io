import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { project_OnlineBicycleShop } from "../../assets";

const projects = [
    {
        img: project_OnlineBicycleShop,
        title: "Online BiCycle Shop",
        description: "E-Commerce website to shop Bicycles",
        techStack:["HTML", "CSS", "JS"],
        git: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app"
    }
]

const ProjectsSection = () => {

    return (<section id="projects" className="d-flex flex-column justify-content-center align-items-center gap-5 py-3">
        <h3>Selected Projects</h3>
        <div>
            {
                projects?.map((project, index) => {

                    return <ProjectCard {...project} key={index} />
                })
            }
        </div>
    </section>);
}

const ProjectCard = ({ title, img, description, techStack, git, deployedLink }) => {
    

    return (
        <div className="p-2 project-card" style={{border: "1px solid gray"}}>
            <a href={deployedLink} style={{maxWidth: 300, display: "block"}}>
                <img className="w-100 cursor-pointer" src={img} alt={title} />
            </a>
            <h5 className="project-title my-1">{title}</h5>
            <p className="project-description my-1">{description}</p>
            <div className="project-tech-stack">
                {
                    techStack?.map((ts, i) => {
                        return <span className="my-1 me-2" key={i}>{ts}</span>
                    })
                }
            </div>
            <div className="d-flex justify-content-start gap-3 my-1">
                <a target="_blank" rel="noreferrer" className="project-github-link" href={git}>
                    <BsGithub className="text-dark" size={27}/>
                </a>
                <a target="_blank" rel="noreferrer" className="project-deployed-link" href={deployedLink}>
                    <BsLink45Deg className="text-dark" size={27}/>
                </a>
            </div>
        </div>
    );
}

export default ProjectsSection;