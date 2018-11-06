import React, { Component } from 'react';
import styled from 'styled-components';

const Description = styled.div`
    text-align: left;
`;

const TitleLine = styled.p`
    font-size: 3rem;
    text-align: Left;
`;

class AboutMe extends Component {
    render() {
        return (
            <div>
                <TitleLine>About Me</TitleLine>
                <Description>
                    <p>0 - 19 Born and Raised in Waterloo</p>
                    <p>19 - Present Studying at Carleton University in Ottawa</p>
                    <p>I've always loved to build things! From playing with Lego and then Minecraft as a kid to building innovative and creative sites today!</p>
                </Description>
            </div>
        );
    }
}

export default AboutMe;