import React, { Component } from 'react';
import styled from 'styled-components';
import Background from './Background';

const GridPlacer = styled.div`
    display: grid;
    grid-template-areas: 
        'line1 line1 line1'
        '. button .';
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

const TitleLine = styled.p`
    font-size: 3rem;
    text-align: center;
    grid-area: line1;
    @media(max-width: 1300px) {
        font-size: 2rem;
    }
`;

const Button = styled.a`
    grid-area: button;
    text-align:center;
    width: 250px;
    cursor: pointer;
    font-size: 2rem;
    text-decoration: none;
    border: 5px solid #000000;
    background-color: #2dd9fc;
    color: #000000;
`;

class TitleCanvas extends Component {
    render() {
        return (
            <div>
                <Background/>
                <GridPlacer>   
                    <TitleLine>Hi, my name is Liam Ballantyne, <br /> and I'm a Web Developer.</TitleLine>
                    <Button ref="button" onClick={ () => {
                        document.getElementById('About').scrollIntoView({ behavior: 'smooth'});
                    }}>About Me -></Button>
                </GridPlacer>
            </div>
        );
    }
}

export default TitleCanvas;