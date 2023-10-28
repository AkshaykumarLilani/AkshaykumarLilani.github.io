import { profile } from "../../assets";


const HeroSection = () => {

    return (<section id="home" className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
        <div>
            <h3>Hello, I am</h3>
            <h1 id="user-detail-name">Akshaykumar Lilani</h1>
            <h4>Software Engineer at Teson LLP</h4>
            <p id="user-detail-intro">Building web applications using <br />
                ReactJS, Mongodb, Redux & ExpressJS.</p>
        </div>
        <div>
            <img className="home-img w-100" src={profile} alt="" />
        </div>
    </section>);
}

export default HeroSection;