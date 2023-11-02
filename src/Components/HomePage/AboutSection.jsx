import { MdDownload } from "react-icons/md";
import css from "./AboutSection.module.css";
import { downloadResume } from "../../Utilities/downloadResumeEventListener";

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
            <div id="resume-button-2" className="p-2nav-link resume d-flex align-items-center gap-2 text-white p-2 cursor-pointer" onClick={downloadResume}>
                <MdDownload size={20}/>
                <span>Resume</span>
            </div>
        </section>
    );
}

export default AboutSection;