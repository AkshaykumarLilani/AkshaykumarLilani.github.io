import { Breakpoint, useCurrentWidth } from "react-socks";
import ResumeButton from "./ResumeButton";
import ThemeChangerButton from "./ThemeChangerButton";
import { useSpring, animated } from "@react-spring/web";

function NavBar() {
    const currentWidth = useCurrentWidth();

    const scaleIn = useSpring({
        from:{
            y: 1000,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1
        }
    })

    if (currentWidth <= 1119) {
        return (
            <animated.nav className="d-flex justify-content-center py-4 w-100" id="nav-menu" style={{ position: "fixed", bottom: 0, ...scaleIn }}>
                <div className="d-flex justify-content-between align-items-center py-2 px-2 mx-auto" style={{
                    background: "linear-gradient(90deg, rgba(249, 248, 248, 0.96) 0.92%, rgba(249, 248, 248, 0.96) 99.95%)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #FFF",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                    minWidth: 350,
                    width: "80%",
                    fontSize: 14
                }}>
                    {/* <div className="nav-link home">
                            <h5 className="mb-0 cursor-pointer">Akshaykumar Lilani</h5>
                        </div> */}
                    <div className="d-flex justify-content-around align-items-center" style={{ flex: 1 }}>
                        <a href="#about" className="cursor-pointer nav-link about active">About</a>
                        <div className="nav-separator"></div>
                        <a href="#skills" className="cursor-pointer nav-link skills">Skills</a>
                        <div className="nav-separator"></div>
                        <a href="#projects" className="cursor-pointer nav-link projects">Projects</a>
                        <div className="nav-separator"></div>
                        <a href="#contact" className="cursor-pointer nav-link contact">Contact</a>
                        <ResumeButton id={`resume-button-1`} />
                        {/* <ThemeChangerButton size={24} /> */}
                    </div>
                </div>
            </animated.nav>
        )
    } else {
        return (
            <nav className="d-flex justify-content-center py-4 mx-auto max-width-desktop" id="nav-menu" style={{ position: "sticky", top: 0 }}>
                <div className="d-flex justify-content-between align-items-center py-2 px-2 w-100" style={{
                    background: "linear-gradient(90deg, rgba(249, 248, 248, 0.96) 0.92%, rgba(212, 212, 212, 0.00) 99.95%)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #FFF",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)"
                }}>
                    <div className="nav-link home">
                        <h5 className="mb-0 cursor-pointer">Akshaykumar Lilani</h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-4">
                        <a href="#about" className="cursor-pointer nav-link about active">About</a>
                        <a href="#skills" className="cursor-pointer nav-link skills">Skills</a>
                        <a href="#projects" className="cursor-pointer nav-link projects">Projects</a>
                        <a href="#contact" className="cursor-pointer nav-link contact">Contact</a>
                        <ResumeButton id={`resume-button-1`} />
                        {/* <ThemeChangerButton size={24} /> */}
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;