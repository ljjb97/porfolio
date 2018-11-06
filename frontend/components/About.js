import React, { Component } from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';

class About extends Component {
    render() {
        return (
            <div>
                <a id="About">
                    <AboutMe />
                </a>
                <MyProjects />
                <ContactMe />
            </div>
        );
    }
}

export default About;