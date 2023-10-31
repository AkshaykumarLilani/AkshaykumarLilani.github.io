import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { downloadResume } from "../Utilities/downloadResumeEventListener";
import { MdDownload } from "react-icons/md";

const NavBar = () => {

    const expand = 'md';

    return (
        <Navbar key={expand} expand={expand} sticky="top" className="bg-body-tertiary" id="nav-menu">
            <Container fluid id="nav-content">
                <Navbar.Brand href="#" className="nav-link home">Akshaykumar Lilani</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="bottom"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-center flex-grow-1">
                            Akshaykumar Lilani
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center justify-content-md-end flex-row flex-grow-1 gap-2 gap-md-5 flex-wrap flex-md-nowrap">
                            <Nav.Link className="p-2 nav-link about" href="#about">About</Nav.Link>
                            <Nav.Link className="p-2 nav-link skills" href="#skills">Skills</Nav.Link>
                            <Nav.Link className="p-2 nav-link projects" href="#projects">Projects</Nav.Link>
                            <Nav.Link className="p-2 nav-link contact" href="#contact">Contact</Nav.Link>
                            <div id="resume-button-1" onClick={downloadResume} className="nav-link resume d-flex align-items-center gap-2 text-white p-2 cursor-pointer" style={{ backgroundColor: "#3F2B96", borderRadius: 10, maxWidth: 98 }}>
                                <MdDownload size={20}/>
                                <span>Resume</span>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar;