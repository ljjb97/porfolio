import React, { Component } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import NavBar from "./NavBar";

const AbCanvas = styled.canvas`
  z-index: -1;
  position: absolute;
`;

class About extends Component {
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
