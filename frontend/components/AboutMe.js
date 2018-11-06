import React, { Component } from 'react';
import styled from "styled-components"
import TriangleBacking from "./TriangleBacking.js"

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
    @media(max-width: 700px) {
        padding-left: 20px;
    }
`;

const AbCanvas = styled.canvas`
    z-index: -1;
    position: absolute;
`;

class AboutMe extends Component {
    componentDidMount() {
        TriangleBacking(0, 0, 1, window.innerWidth, 600, 50, "#FFFFFF", "AboutBack");
        document.getElementById("AboutBack").style.top = (window.innerHeight + 105).toString() + "px"
    }
    render() {
        return (
            <div>
                <AbCanvas id="AboutBack"/>
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