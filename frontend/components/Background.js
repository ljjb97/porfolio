import React, { Component } from 'react';
import styled from 'styled-components';

const Backer = styled.div`
            background-color: #2dd9fc;
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            height: 100%;
            z-index: 3;
        `;

class Background extends Component {
    componentDidMount() {
        const background = this.refs.background;
        //Check for window resize
        window.addEventListener("resize", (background) => {
           document.getElementById("background").style.height = (window.innerHeight.toString() + "px");
        });
        background.style.height = (window.innerHeight.toString() + "px");
        background.style.backgroundColor = "#2dd9fc";
        //remove the backer that rendered on the server to display something while the actual background is loaded clientside
        background.removeChild(this.refs.background.childNodes[0]);
    }
    render() {
        return (
            <div ref="background" id="background">
                <Backer />
            </div>
        );
    }
}

export default Background;