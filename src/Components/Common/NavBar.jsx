import ResumeButton from "./ResumeButton";
import ThemeChangerButton from "./ThemeChangerButton";

function NavBar() {
    return (
        <nav className="d-flex justify-content-center py-4 mx-auto max-width-desktop" id="nav-menu" style={{position: "sticky", top: 0}}>
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
                    <ResumeButton id={`resume-button-1`}/>
                    <ThemeChangerButton size={24} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;