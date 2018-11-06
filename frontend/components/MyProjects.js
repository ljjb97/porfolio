import React, { Component } from 'react';
import styled from 'styled-components';
import TitleLine from './styles/TitleStyles';

const Projects = styled.div`
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media(min-width: 700px) and (max-width: 1050px) {
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const Project = styled.div`
    border: 5px solid #000000;
`;

class MyProjects extends Component {

    render() {
        return (
            <div>
                <TitleLine>My Projects</TitleLine>
                <Projects>
                    <Project>Project 1</Project>
                    <Project>Project 2</Project>
                    <Project>Project 3</Project>
                </Projects>
            </div>
        );
    }
}

export default MyProjects;