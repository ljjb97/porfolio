import React, { Component } from 'react';
import styled from "styled-components"
import TriangleBacking from "./TriangleBacking.js"

const Description = styled.div`
    margin: 50px;
    box-shadow: 2px 2px 4px #000000;
    border-radius: 50px;
    background-color: #f9f9f9;
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
    padding-top: 20px;
    grid-area: Picture;
    border-radius: 50%;
    @media(max-width: 700px) {
        padding-left: 20px;
    }
`;

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Description>
                    <Words>
                        <p>0 - 18 Born and Raised in Waterloo</p>
                        <p>18 - Present Studying at Carleton University in Ottawa</p>
                        <p>I've always loved to build things! From playing with Lego and then Minecraft as a kid to building innovative and creative sites today!</p>
                    </Words>
                    <MyPicture src= "../static/LiamBallantyne.jpg" alt= "avatar"/>
                </Description>
            </div>
        );
    }
}

export default AboutMe;