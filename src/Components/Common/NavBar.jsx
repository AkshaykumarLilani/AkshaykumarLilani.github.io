import { Breakpoint, useCurrentWidth } from "react-socks";
import ResumeButton from "./ResumeButton";
import ThemeChangerButton from "./ThemeChangerButton";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const links = ["about", "skills", "projects", "contact"]

function NavBar() {
    const currentWidth = useCurrentWidth();

    const [active, setActive] = useState("about");

    const scaleIn = useSpring({
        from: {
            y: 1000,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1
        }
    });

    const scrollTo = (e, sectionName) => {
        e.preventDefault();
        // console.log(e.target.hash, e);
        let x = document.querySelector(`#${sectionName}`);
        setActive(sectionName);
        if (x) {
            let rect = x.getBoundingClientRect();
            let distanceFromTop = rect.top;
            let scrollToY = window.scrollY + distanceFromTop;
            if (currentWidth <= 1119){
                scrollToY -= 10;
            } else {
                scrollToY -= 70;
            }
            // console.log({ rect, y: rect.top });
            // x.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            window.scrollTo({
                top: scrollToY,
                behavior: 'smooth' // Optional smooth scrolling
            });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Assuming each section has a class 'section'
            const sections = document.querySelectorAll('section');

            // let queuedHighlight = null;
            // const delayHighlight = (id) => {
            //     if (queuedHighlight){
            //         clearTimeout(queuedHighlight);
            //     }
            //     queuedHighlight = setTimeout(()=>setActive(id), 1000);
            // }

            const delayHighlight = (id) => {setActive(id)}

            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY - 100;
                const sectionBottom = sectionTop + rect.height - 100;
                // console.table({h: sections[i].id, top: sectionTop, bot: sectionBottom, scrollY})

                if (scrollY >= sectionTop && scrollY <= sectionBottom) {
                    // You can do something specific for this section here
                    let sectionId = sections[i].id;
                    console.log(sectionId)
                    if (sectionId === "hero"){
                        delayHighlight("about");
                    } else if (sectionId === "github-stats"){
                        delayHighlight("contact");
                    } else if (sectionId) {
                        delayHighlight(sectionId);
                    }
                    // console.dir(sections[i]);
                    break;
                }
            }
        };
        let timer = null;
        // Attach the scroll event listener
        const efficientScrollHandler = () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                handleScroll();
            }, 100);
        }
        window.addEventListener('scroll', efficientScrollHandler);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', efficientScrollHandler);
        };
    }, []);

    if (currentWidth <= 1119) {
        return (
            <animated.nav className="d-flex justify-content-center py-4 w-100" id="nav-menu" style={{ position: "fixed", bottom: 0, ...scaleIn, zIndex: 999 }}>
                <div className="d-flex justify-content-between align-items-center py-2 px-2 mx-auto" style={{
                    // background: "linear-gradient(90deg, rgba(249, 248, 248, 0.96) 0.92%, rgba(249, 248, 248, 0.96) 99.95%)",
                    backgroundColor: "rgba(255, 255, 255, 0.78)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #FFF",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                    minWidth: 350,
                    width: "80%",
                    fontSize: 14,

                }}>
                    {/* <div className="nav-link home">
                            <h5 className="mb-0 cursor-pointer">Akshaykumar Lilani</h5>
                        </div> */}
                    <div className="d-flex justify-content-around align-items-center" style={{ flex: 1 }}>
                        {
                            links?.map((link, i) => <div className="d-flex justify-content-between" key={i+"mobnav"}>
                                <a
                                    
                                    href={`#${link}`}
                                    className={`cursor-pointer nav-link ${link} ${link === active ? "active" : ""}`}
                                    onClick={(e) => scrollTo(e, link)}
                                    style={{ scrollMargin: 20, flex: 1 }}
                                >
                                    {link[0].toUpperCase() + link.slice(1)}
                                </a>
                                {/* {
                                    (i <= links.length - 2) ? <div className="nav-separator"></div> : <></>
                                } */}
                            </div>)
                        }
                        <ResumeButton id={`resume-button-1`} />
                        {/* <ThemeChangerButton size={24} /> */}
                    </div>
                </div>
            </animated.nav>
        )
    } else {
        return (
            <nav className="d-flex justify-content-center py-4 mx-auto max-width-desktop" id="nav-menu" style={{ position: "sticky", top: 0, zIndex: 999 }}>
                <div className="d-flex justify-content-between align-items-center py-2 px-2 w-100" style={{
                    // background: "linear-gradient(90deg, rgba(249, 248, 248, 0.96) 0.92%, rgba(212, 212, 212, 0.00) 99.95%)",
                    backgroundColor: "rgba(255, 255, 255, 0.78)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #FFF",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                }}>
                    <div onClick={(e)=>scrollTo(e, 'hero')} className="nav-link home">
                        <h5 className="mb-0 cursor-pointer">Akshaykumar Lilani</h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-4">
                        {
                            links?.map((link, i) => <a
                                key={`desktop-${i}`}
                                href={`#${link}`}
                                className={`cursor-pointer nav-link ${link} ${link === active ? "active" : ""}`}
                                onClick={(e) => scrollTo(e, link)}
                                style={{ scrollMargin: 20 }}
                            >
                                {link[0].toUpperCase() + link.slice(1)}
                            </a>)
                        }
                        <ResumeButton id={`resume-button-1`} />
                        {/* <ThemeChangerButton size={24} /> */}
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;