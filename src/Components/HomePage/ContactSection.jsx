import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import css from "./ContactSection.module.css";

const ContactSection = () => {

    return (
        <section id="contact" className="d-flex flex-column justify-content-center align-items-center gap-5">
            <h3>Contact</h3>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
                <div className="d-flex justify-content-center flex-column">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/akshay-lilani">
                        <AiOutlineLinkedin size={27 + "px"} style={{textDecoration: "none", color: "black"}} className="me-1" id="contact-linkedin" />akshay-lilani
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/AkshaykumarLilani" id="contact-github">
                        <FaGithubSquare size={27 + "px"} style={{textDecoration: "none", color: "black"}} className="me-1"/>AkshaykumarLilani
                    </a>
                </div>
                <div className={css['divider']} style={{ border: "1px solid gray", height: "40px" }}></div>
                <div className="d-flex flex-column justify-content-start align-items-start gap-2">
                    <div className="d-flex align-items-center gap-2">
                        <AiOutlineMail />
                        <div className="d-flex flex-column">
                            <a target="_blank" rel="noreferrer" href="mailto:aksbaylilani60@gmail.com" id="contact-email">aksbaylilani60@gmail.com</a>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <AiOutlinePhone />
                        <a target="_blank" rel="noreferrer" href="tel:919049963060" id="contact-phone">(+91) 9049 963060</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;