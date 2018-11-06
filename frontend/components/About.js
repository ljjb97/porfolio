import React, { Component } from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import NavBar from './NavBar';

class About extends Component {
    render() {
        return (
            <div>
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