import React from "react";
import { profile, tradingview, curve } from "../../assets";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Particlesjs from "./Particlejs";
// import { useSpring, animated } from "react-spring";
import css from "./GlassCard.module.css";

const GlassCard = () => {
    // const scaleUp = useSpring({
    //     from: { transform: "scale(1)" },
    //     to: { transform: "scale(2)" },
    //     reset: true,
    // });

    return (
        <>
            <Particlesjs />
            <div className={`${css["home"]} d-flex justify-content-center align-items-center`}>
                <div className={css["info-card"] + " d-flex flex-column"}>
                    <div className={"position-relative " + css["top-picture"]}>
                        <img
                            src={profile}
                            alt="Akshay's profile pic"
                            className={css["profile-photo"]+" position-absolute top-0"}
                        />
                        <img
                            src={curve}
                            alt=""
                            className="position-absolute top-0 w-100 curve left-0"
                        />
                    </div>
                    <div
                        className="p-2 d-flex flex-column justify-content-between"
                        style={{ flex: 1 }}
                    >
                        <div>
                            <h1 className={css["name"] + " mb-0 text-center"}>Akshaykumar Lilani</h1>
                            <h3 className={css["sub-heading"]+" text-center"}>
                                Software Engineer at Teson LLP
                            </h3>
                        </div>

                        <div className={"text-center "+css["bio"]}>
                            <p className="mb-2">
                                Building web applications using
                                <br /> <span> ReactJS</span>, <span>Mongodb</span>,{" "}
                                <span>Redux</span> & <span>ExpressJS</span>.
                            </p>
                            <p className="mb-0">
                                I also have hands-on experience with <span>Elasticsearch</span>,{" "}
                                <span>MySQL</span>, <span>Django</span>, <br />
                                <span>Django REST</span> and <span>Python Scripting</span>
                            </p>
                        </div>

                        <div className="">
                            <div className={css["social-icons"]+" d-flex flex-row align-items-center justify-content-center w-100"}>
                                <a href="https://in.tradingview.com/u/S_Codes/#published-scripts">
                                    <img src={tradingview} alt="" className={css["tradingview"]} />
                                </a>
                                <a href="https://www.linkedin.com/in/akshay-lilani">
                                    <AiOutlineLinkedin size={27 + "px"} />
                                </a>
                                <a href="https://www.upwork.com/freelancers/~01c56c58341787db81">
                                    <SiUpwork size={27 + "px"} className={css["upwork"]} />
                                </a>
                                <a href="https://github.com/AkshaykumarLilani">
                                    <FaGithubSquare size={27 + "px"} />
                                </a>
                                <a href="https://www.instagram.com/akshay_lilani/">
                                    <BsInstagram size={25 + "px"} />
                                </a>
                            </div>
                            <p className={"text-center "+css["disclaimer"]}>
                                Please visit my{" "}
                                <a href="https://www.linkedin.com/in/akshay-lilani">
                                    <span>linkedin</span>
                                </a>{" "}
                                to see my experience and projects, I will be updating this site
                                soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlassCard;