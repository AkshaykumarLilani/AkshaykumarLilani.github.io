import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

const NavBar = () => {

    const expand = 'md';

    return (
        <Navbar key={expand} expand={expand} sticky="top" className="bg-body-tertiary mb-3 bg-light" id="nav-menu">
            <Container fluid>
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
                        <Nav className="justify-content-center justify-content-md-end flex-row flex-grow-1 pe-3 gap-2 gap-md-5 flex-wrap flex-md-nowrap">
                            <Nav.Link className="p-2 nav-link about" href="#about">About</Nav.Link>
                            <Nav.Link className="p-2 nav-link skills" href="#skills">Skills</Nav.Link>
                            <Nav.Link className="p-2 nav-link projects" href="#projects">Projects</Nav.Link>
                            <Nav.Link className="p-2 nav-link contact" href="#contact">Contact</Nav.Link>
                            <Nav.Link id="resume-link-1" href="/Resume.pdf" target="_blank" className="nav-link resume d-flex align-items-center gap-2 text-white p-2" style={{backgroundColor:"#7844E9", borderRadius: 10, maxWidth: 98}}>
                                <BsDownload />
                                <span>Resume</span>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar;