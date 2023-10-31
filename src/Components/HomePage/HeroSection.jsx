import { profile } from "../../assets";
import Particlesjs from "../OldCard/Particlejs";


const HeroSection = () => {

    return (
    <section id="home" className="d-flex flex-column-reverse gap-md-5 flex-md-row justify-content-center align-items-center position-relative">
        <Particlesjs asBackground={true} />
        <div className="text-light text-center text-md-start">
            <h3>Hello, I am</h3>
            <h1 id="user-detail-name">Akshaykumar Lilani</h1>
            <h5>Software Engineer at Teson LLP</h5>
            <p>Building web applications using <br />
                ReactJS, Mongodb, Redux & ExpressJS.</p>
        </div>
        <div>
            <img className="home-img w-100" src={profile} alt="" />
        </div>
    </section>);
}

export default HeroSection;