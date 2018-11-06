import React, { Component } from 'react';
import TitleLine from './styles/TitleStyles';
import styled from "styled-components"

const Description = styled.div`
    display: grid;
    text-align: left;
    grid-template-areas: 
        'Words Picture';
    @media(max-width: 700px) {
        grid-template-areas:
            'Picture'
            'Words';
    }
`;

const Words = styled.div`
    grid-area: Words;
    padding-left: 20px;
`;

const MyPicture = styled.img`
    grid-area: Picture;
    border-radius: 50%;
`;

class AboutMe extends Component {
    render() {
        return (
            <div>
                <TitleLine>About Me</TitleLine>
                <Description>
                    <Words>
                        <p>0 - 19 Born and Raised in Waterloo</p>
                        <p>19 - Present Studying at Carleton University in Ottawa</p>
                        <p>I've always loved to build things! From playing with Lego and then Minecraft as a kid to building innovative and creative sites today!</p>
                    </Words>
                    <MyPicture src= "../static/LiamBallantyne.jpg" alt= "avatar"/>
                </Description>
            </div>
        );
    }
}

export default AboutMe;