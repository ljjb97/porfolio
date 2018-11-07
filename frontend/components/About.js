import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import NavBar from './NavBar';
import TriangleBacking from "./TriangleBacking.js"

const AbCanvas = styled.canvas`
    z-index: -1;
    position: absolute;
`;

class About extends Component {
    componentDidMount() {
        const ABdes = document.getElementById("AboutCont");
        const test = window.getComputedStyle(ABdes).getPropertyValue('height').split("");
        test.splice(test.length - 2, 2);
        const IntMaker = parseInt(test.join(""));
        TriangleBacking(0, 0, 0, window.innerWidth, IntMaker, 50, 10, "#FFFFFF", "AboutBack");
        document.getElementById("AboutBack").style.top = (window.innerHeight + 100).toString() + "px"
    }
    render() {
        return (
            <div id="AboutCont">
                <AbCanvas id="AboutBack" />
                <NavBar>About</NavBar>
                <a id="About">
                    <AboutMe />
                </a>
                <NavBar>Projects</NavBar>
                <MyProjects />
                <NavBar>Contact</NavBar>
                <ContactMe />
            </div>
        );
    }
}

export default About;