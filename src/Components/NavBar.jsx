

const NavBar = () => {

    return(
        <nav id="nav-menu" className="d-flex p-3 justify-content-between align-items-center">
            <div>
                <h3 className="m-0 nav-link home">Home</h3>
            </div>
            <div className="d-flex gap-5 align-items-center">
                <p className="m-0 nav-link about">About</p>
                <p className="m-0 nav-link skills">Skills</p>
                <p className="m-0 nav-link projects">Projects</p>
                <p className="m-0 nav-link contact">Contact</p>
                <button className="p-2 nav-link resume">Resume</button>
            </div>
        </nav>
    )
}

export default NavBar;