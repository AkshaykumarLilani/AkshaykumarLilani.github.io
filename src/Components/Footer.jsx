import glassCardCss from "./OldCard/GlassCard.module.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { tradingview } from "../assets";

const Footer = () => {


    return (
        <footer className="d-flex justify-content-center align-items-center flex-column bg-dark">
            <h6 className="text-white my-1">Available at</h6>
            <div className={glassCardCss["social-icons"] + " d-flex flex-row align-items-center justify-content-center w-100"}>
                <a target="_blank" rel="noreferrer" href="https://in.tradingview.com/u/S_Codes/#published-scripts">
                    <img src={tradingview} alt="" className={glassCardCss["tradingview"]} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/akshay-lilani">
                    <AiOutlineLinkedin size={27 + "px"} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01c56c58341787db81">
                    <SiUpwork size={27 + "px"} className={glassCardCss["upwork"]} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/AkshaykumarLilani">
                    <FaGithubSquare size={27 + "px"} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/akshay_lilani/">
                    <BsInstagram size={25 + "px"} />
                </a>
            </div>
            <p className="text-muted my-1">Last Updated: October 2023</p>
        </footer>
    );
}

export default Footer;