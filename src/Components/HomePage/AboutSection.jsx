import { BsDownload } from "react-icons/bs";
import css from "./AboutSection.module.css";

const AboutSection = () => {

    return (
        <section id="about" className="about section d-flex flex-column justify-content-center align-items-center py-4 gap-5">
            <h3 className="m-0">About</h3>
            <div id="user-detail-intro" className={css['about-content']}>
                <p className="text-center">
                    I am a Full Stack Developer building web applications using Mongodb, ReactJs, Django Rest Framework, ExpressJs and Nodejs at Teson LLP. Additionally, I am also proficient in elasticsearch, EJS, angularJS, AWS EC2 and AWS S3. My expertise in these technologies allows me to deliver effective and efficient solutions to complex problems.
                </p>
                <p className="text-center">
                    I am a creative problem-solver who is committed to staying up-to-date with emerging technologies and industry trends. With a strong focus on delivering high-quality work, I strive to exceed client expectations and drive business success.
                </p>
            </div>
            <a id="resume-link-2" href="/Resume.pdf" target="_blank" className="p-2nav-link resume d-flex align-items-center gap-2  text-white p-2" style={{backgroundColor:"#7844E9", borderRadius: 10, textDecoration: "none"}}>
                <BsDownload />
                <span>Resume</span>
            </a>
        </section>
    );
}

export default AboutSection;