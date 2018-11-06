import React, { Component } from 'react';
import AboutMe from './AboutMe';

class About extends Component {
    render() {
        return (
            <div>
                <a id="About">
                    <AboutMe />
                </a>
                <div>My Projects</div>
                <div>Contact Me</div>
            </div>
        );
    }
}

export default About;