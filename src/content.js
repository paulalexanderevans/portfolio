//src/welcome.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const content = require("./content.json");

export default function Welcome() {
    useEffect(() => {
        console.log("physical content: ", content[0].physical[0]);
        setLastScroll(0);
        topColor();
        setMenuOpen(false);
    }, []);
    const [counter, setCounter] = useState(0);
    //menu
    const [lastScroll, setLastScroll] = useState(0);
    const [menuOpen, setMenuOpen] = useState(0);

    const randomColour = () => {
        const getRandomColourNumber = () => {
            return Math.floor(Math.random() * 256);
        };
        var r = getRandomColourNumber();
        var g = getRandomColourNumber();
        var b = getRandomColourNumber();
        var randomColour = "rgb(" + r + "," + g + "," + b + ")";
        return randomColour;
    };

    // ---gobstopper---

    const changeColor = (e) => {
        const bigBall = document.querySelector(".bigball");
        const invisiBall = document.querySelector(".invisiBall");
        const gobstopper = document.querySelector(".gobstopper");
        var RC = randomColour();
        if (e.target === invisiBall) {
            bigBall.style.background = RC;
        } else if (e.target === gobstopper) {
            e.target.style.background = RC;
        } else {
            e.target.style.color = RC;
        }
    };
    const linkHover = (e) => {
        var RC = randomColour();
        const menuButton = document.querySelector(".menuButton");
        const menuBurger1 = document.querySelector(".menuBurger1");
        const menuBurger2 = document.querySelector(".menuBurger2");
        if (e.target === menuButton) {
            menuBurger1.style.background = RC;
            menuBurger2.style.background = RC;
        } else {
            e.target.style.color = RC;
        }
    };

    const linkLeave = (e) => {
        if (menuOpen && e.target.id === "work") {
            console.log("work");
        } else {
            e.target.style.color = "black";
        }
    };

    // ---content---

    const menuTxt = () => {
        const welcomeTxtDiv = document.querySelector(".welcomeTxtTest");
        const workMenu = document.querySelector(".workMenu");
        console.log("moving", workMenu, "on-screen");
        console.log("moving", welcomeTxtDiv, "off-screen");
        welcomeTxtDiv.style.left = "-100%";
        workMenu.style.left = "0.04em";
        const work = document.querySelector("#work");
        var RC = randomColour();
        work.style.color = RC;
    };
    const welcomeTxt = () => {
        const welcomeTxtDiv = document.querySelector(".welcomeTxtTest");
        welcomeTxtDiv.style.left = "0.04em";
        const workMenu = document.querySelector(".workMenu");
        workMenu.style.left = "100%";
        const work = document.querySelector("#work");
        work.style.color = "black";
    };

    // ---HEADER___
    const workClick = async () => {
        home.current.scrollIntoView({ behavior: "smooth" });
        console.log("someone clicked on work");
        if (!menuOpen) {
            console.log("menu is closed");
            setMenuOpen(true);
            menuTxt();
        } else {
            console.log("menu is open");
            setMenuOpen(false);
            welcomeTxt();
        }
    };

    const handleScroll = (e) => {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        const currentScroll = e.target.scrollTop;
        if (currentScroll <= 0) {
            body.classList.remove(scrollUp);
            console.log("top");
        }

        if (
            currentScroll > lastScroll &&
            !body.classList.contains(scrollDown)
        ) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
            if (body.classList.contains(top)) {
                body.classList.remove(top);
            }
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains(scrollDown)
        ) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }
        setLastScroll(currentScroll);
    };

    // ---scroll to---
    const code = useRef(null);
    const digital = useRef(null);
    const physical = useRef(null);
    const contact = useRef(null);
    const about = useRef(null);
    const home = useRef(null);

    const scrollTo = (e) => {
        if (e.target.id === "code") {
            code.current.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.id === "digital") {
            digital.current.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.id === "physical") {
            physical.current.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.id === "contact") {
            contact.current.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.id === "about") {
            about.current.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.id === "home") {
            home.current.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.id === "top") {
            home.current.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
        welcomeTxt();
    };

    // ---top color---
    const topColor = () => {
        var box = document.querySelector(".box");
        function getRandomColourNumber() {
            return Math.floor(Math.random() * 256);
        }

        function changeColor() {
            var r = getRandomColourNumber();
            var g = getRandomColourNumber();
            var b = getRandomColourNumber();
            var randomColour = "rgb(" + r + "," + g + "," + b + ")";
            box.style.background = randomColour;
            setTimeout(changeColor, 500);
        }
        setTimeout(changeColor, 500);
    };
    // ---gallery cursor---

    const rightHoverEnter = (e) => {
        e.target.style.cursor =
            'url("https://s3.eu-central-1.amazonaws.com/paulevans.de.media/9BH1H86YcXWWkOfxiGq4XSRrMVmh5bd7.png") 32 32, auto';
    };

    const leftHoverEnter = (e) => {
        e.target.style.cursor =
            'url("https://s3.eu-central-1.amazonaws.com/paulevans.de.media/iTlGjIQ7Dc2VZv1LkkQ-iMVwrfXAdpb8.png") 32 32, auto';
    };

    async function clickLeft(e) {
        var thisProject = eval("content" + e.nativeEvent.path[1].id);
        console.log("thisProject: ", thisProject);
        setCounter(
            e.nativeEvent.path[3].children[0].children[1].children[1].children[0].innerHTML.charAt(
                0
            ) - 1
        );

        console.log("counter: ", counter);
        if (counter > 0) {
            await setCounter(counter - 1);
        } else {
            console.log("first photo");
            await setCounter(thisProject.media.length - 1);
        }

        console.log("counter2: ", counter);
        var thisCounterDiv =
            e.nativeEvent.path[3].children[0].children[1].children[1];
        console.log("thisCounterDiv ", thisCounterDiv);
        thisCounterDiv.innerHTML = `<h4>
                ${counter + 1}&nbsp;|&nbsp;${thisProject.media.length}
            </h4>`;

        var thisPhoto = e.nativeEvent.path[3].children[1].children[1];
        console.log("thisPhoto: ", thisPhoto);
        thisPhoto.src = thisProject.media[counter].src;
    }

    const clickRight = (e) => {
        console.log("someone clicked right");
        var thisProject = eval("content" + e.nativeEvent.path[1].id);
        console.log("thisProject: ", thisProject);
        setCounter(
            e.nativeEvent.path[3].children[0].children[1].children[1].children[0].innerHTML.charAt(
                0
            ) - 1
        );

        console.log("counter: ", counter);
        if (counter === thisProject.media.length - 1) {
            console.log("last photo");
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }

        console.log("counter2: ", counter);
        var thisCounterDiv =
            e.nativeEvent.path[3].children[0].children[1].children[1];
        console.log("thisCounterDiv ", thisCounterDiv);
        thisCounterDiv.innerHTML = `<h4>
                ${counter + 1}&nbsp;|&nbsp;${thisProject.media.length}
            </h4>`;

        var thisPhoto = e.nativeEvent.path[3].children[1].children[1];
        console.log("thisPhoto: ", thisPhoto);
        thisPhoto.src = thisProject.media[counter].src;
    };

    return (
        <div className="container" onScroll={(e) => handleScroll(e)}>
            {/* <Cursor></Cursor> */}
            <div className="header">
                <h2
                    id="home"
                    onMouseEnter={(e) => linkHover(e)}
                    onMouseLeave={(e) => linkLeave(e)}
                    // className="headerTxt"
                    onClick={(e) => scrollTo(e)}
                >
                    PAUL EVANS
                </h2>
                <div className="headerLinks">
                    <h2
                        id="work"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                        className="headerTxt"
                        onClick={() => workClick()}
                    >
                        WORK
                    </h2>
                    <h2
                        id="about"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                        className="headerTxt"
                        onClick={(e) => scrollTo(e)}
                    >
                        ABOUT
                    </h2>
                    <h2
                        className="headerTxt"
                        onClick={(e) => scrollTo(e)}
                        id="contact"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                    >
                        CONTACT
                    </h2>
                </div>
            </div>
            <div className="welcome" ref={home}>
                <div
                    className="gobstopper"
                    onMouseEnter={(e) => changeColor(e)}
                ></div>
                <div className="bigball" />
                <div
                    className="invisiBall"
                    onMouseEnter={(e) => changeColor(e)}
                />

                <h4 className="year">2012-2021</h4>
                <div className="welcomeTxtTest">
                    FULL-STACK WEB DEVELOPER, DESIGNER & CRAFTSMAN
                </div>
                <div className="workMenu">
                    <div
                        className="workLinks"
                        onClick={(e) => scrollTo(e)}
                        id="code"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                    >
                        CODE
                    </div>

                    <div
                        className="workLinks"
                        onClick={(e) => scrollTo(e)}
                        id="digital"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                    >
                        DIGITAL
                    </div>
                    <div
                        className="workLinks"
                        onClick={(e) => scrollTo(e)}
                        id="physical"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                    >
                        PHYSICAL
                    </div>
                </div>
                <div className="down">
                    <h2>⌃</h2>
                </div>
            </div>
            <div
                ref={about}
                className="work"
                onMouseEnter={(e) => changeColor(e)}
            >
                ABOUT
            </div>
            <div className="description">
                <div className="descriptionTxt">
                    <h2>
                        Programmer who speaks design, designer who speaks code.
                        Based in Berlin, fluent German with an English mother
                        tongue.
                        <br></br>
                        <br></br>Broad skill-set spanning front and back end
                        development, web, graphic and 3D design, moving image,
                        audio manipulation, prototyping and physical products.
                        <br></br>
                        <br></br>
                        Studied Digital Media Design at University of the Arts,
                        London topped up with courses in Javascript, Wordpress,
                        SEO and most recently graduated from Spiced Academy’s
                        Full-Stack Web Developer Bootcamp.
                    </h2>
                </div>
            </div>
            <div className="break"></div>
            <div
                ref={code}
                className="work"
                onMouseEnter={(e) => changeColor(e)}
            >
                CODE
            </div>
            <div className="description">
                <div className="descriptionTxt">
                    <h2>
                        Full-stack web development utilising responsive design
                        with HTML, CSS, and JavaScript. Data requests through
                        APIs and management with SQL databases. Security
                        measures including passwords, hashing and secret keys.
                        Server-side javascript applications with Node JS and
                        front-end rendering using Vue and React.
                    </h2>
                </div>
            </div>
            <div className="break"></div>
            {content[0].code.map((physical) => (
                <div key={physical.id}>
                    <div className="preview">
                        <div className="text">
                            <div>
                                <h4>
                                    {physical.title} ⎮ {physical.subtitle}
                                </h4>
                                <br></br>
                                <br></br>
                                <h4>role: </h4>
                                <p> {physical.role}</p>
                                <br></br>
                                <h4>tech: </h4>
                                <p>{physical.tech}</p>
                                <br></br>
                                <br></br>
                                <p>{physical.description}</p>
                            </div>
                            <div className="links">
                                {physical.links.length > 0 && (
                                    <div>
                                        {physical.links.map((link) => (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={link.target}
                                                href={link.target}
                                                onMouseEnter={(e) =>
                                                    linkHover(e)
                                                }
                                                onMouseLeave={(e) =>
                                                    linkLeave(e)
                                                }
                                            >
                                                <br></br> <h4>{link.txt}</h4>
                                            </a>
                                        ))}
                                    </div>
                                )}
                                {physical.media.length > 1 && (
                                    <div className="counter">
                                        <h4>
                                            1&nbsp;|&nbsp;
                                            {physical.media.length}
                                        </h4>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="gallery">
                            <img
                                className="previewImage"
                                src={physical.media[0].src}
                                alt={physical.media[0].alt}
                            />
                        </div>
                    </div>
                    <div className="break"></div>
                </div>
            ))}

            <div
                ref={digital}
                className="work"
                onMouseEnter={(e) => changeColor(e)}
            >
                DIGITAL
            </div>
            <div className="description">
                <div className="descriptionTxt">
                    <h2>
                        A collection of moving and still audio-visual and
                        graphic projects and commissions made using a
                        combination of Cinema4D, Ableton Live, Adobe Illustrator
                        & Photoshop, Final Cut Pro and hand-drawing.
                    </h2>
                </div>
            </div>
            <div className="break"></div>
            {content[0].digital.map((physical) => (
                <div key={physical.id}>
                    <div className="preview">
                        <div className="text">
                            <div>
                                <h4>
                                    {physical.title} ⎮ {physical.subtitle}
                                </h4>
                                <br></br>
                                <br></br>
                                <h4>role: </h4>
                                <p> {physical.role}</p>
                                <br></br>
                                <h4>tech: </h4>
                                <p>{physical.tech}</p>
                                <br></br>
                                <br></br>
                                <p>{physical.description}</p>
                            </div>
                            <div className="links">
                                {physical.links.length > 0 && (
                                    <div>
                                        {physical.links.map((link) => (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={link.target}
                                                href={link.target}
                                                onMouseEnter={(e) =>
                                                    linkHover(e)
                                                }
                                                onMouseLeave={(e) =>
                                                    linkLeave(e)
                                                }
                                            >
                                                <h4>{link.txt}</h4>
                                            </a>
                                        ))}
                                    </div>
                                )}
                                {physical.links.length === 0 && <div></div>}
                                {physical.media.length > 1 && (
                                    <div className="counter">
                                        <h4>
                                            1&nbsp;|&nbsp;
                                            {physical.media.length}
                                        </h4>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="gallery">
                            {physical.media.length > 1 && (
                                <div className="galleryNav" id={physical.id}>
                                    <div
                                        className="left"
                                        onClick={(e) => clickLeft(e)}
                                        onMouseEnter={(e) => leftHoverEnter(e)}
                                    ></div>
                                    <div
                                        className="right"
                                        onClick={(e) => clickRight(e)}
                                        onMouseEnter={(e) => rightHoverEnter(e)}
                                    ></div>
                                </div>
                            )}
                            {physical.media[0].type === "image" && (
                                <img
                                    className="previewImage"
                                    src={physical.media[0].src}
                                    alt={physical.media[0].alt}
                                />
                            )}
                            {physical.media[0].type === "video" && (
                                <video
                                    type="VIDEO/mp4"
                                    preload="yes"
                                    controls="control"
                                    className="previewImage"
                                    src={physical.media[0].src}
                                    alt={physical.media[0].alt}
                                />
                            )}
                        </div>
                    </div>
                    <div className="break"></div>
                </div>
            ))}
            <div
                ref={physical}
                className="work"
                onMouseEnter={(e) => changeColor(e)}
            >
                PHYSICAL
            </div>
            <div className="description">
                <div className="descriptionTxt">
                    <h2>
                        A collection of projects developed from concept and
                        design through to prototyping and handcrafting the final
                        finished product.
                    </h2>
                </div>
            </div>
            <div className="break"></div>
            {content[0].physical.map((physical) => (
                <div key={physical.id}>
                    <div className="preview">
                        <div className="text">
                            <div>
                                <h4>
                                    {physical.title} ⎮ {physical.subtitle}
                                </h4>
                                <br></br>
                                <br></br>
                                <h4>role: </h4>
                                <p> {physical.role}</p>
                                <br></br>
                                <h4>tech: </h4>
                                <p>{physical.tech}</p>
                                <br></br>
                                <br></br>
                                <p>{physical.description}</p>
                            </div>
                            <div className="links">
                                {physical.links.length > 0 && (
                                    <div>
                                        {physical.links.map((link) => (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={link.target}
                                                href={link.target}
                                                onMouseEnter={(e) =>
                                                    linkHover(e)
                                                }
                                                onMouseLeave={(e) =>
                                                    linkLeave(e)
                                                }
                                            >
                                                <h4>{link.txt}</h4>
                                            </a>
                                        ))}
                                    </div>
                                )}
                                {physical.media.length > 1 && (
                                    <div className="counter">
                                        <h4>
                                            1&nbsp;|&nbsp;
                                            {physical.media.length}
                                        </h4>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="gallery">
                            <div className="galleryNav" id={physical.id}>
                                <div
                                    className="left"
                                    onClick={(e) => clickLeft(e)}
                                    onMouseEnter={(e) => leftHoverEnter(e)}
                                ></div>
                                <div
                                    className="right"
                                    onClick={(e) => clickRight(e)}
                                    onMouseEnter={(e) => rightHoverEnter(e)}
                                ></div>
                            </div>
                            <img
                                className="previewImage"
                                src={physical.media[0].src}
                                alt={physical.media[0].alt}
                            />
                        </div>
                    </div>
                    <div className="break"></div>
                </div>
            ))}
            <div
                ref={contact}
                className="work"
                onMouseEnter={(e) => changeColor(e)}
            >
                CONTACT
            </div>
            <div className="description">
                <div className="descriptionTxt">
                    <h4>EMAIL: </h4>
                    <a href="mailto:hi@paulevans.de">
                        <p>hi@paulevans.de ↗</p>
                    </a>
                    <br></br>
                    <h4>PHONE: </h4>
                    <p>+4917621313530</p>
                    <br></br>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/paulalexanderevans"
                        onMouseEnter={(e) => linkHover(e)}
                        onMouseLeave={(e) => linkLeave(e)}
                    >
                        <h4>GitHub ↗</h4>
                    </a>
                    <br></br>
                    <h4>INSTAGRAM ↗</h4>
                </div>
            </div>
            {/* <div className="break"></div> */}
            <div className="footer">
                <div className="sticker">
                    <div className="box">
                        <img
                            src="https://s3.eu-central-1.amazonaws.com/paulevans.de.media/2sV5_7zjkRK_pKYRLoHsQDjKNWZ97uzX.png"
                            alt="top car country sticker"
                            className="image"
                            id="top"
                            onClick={(e) => scrollTo(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
