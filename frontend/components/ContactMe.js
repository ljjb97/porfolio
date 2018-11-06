import React, { Component } from 'react';
import TitleLine from './styles/TitleStyles';
import styled from 'styled-components';

const ImageSizer = styled.img`
    width: 20px;
    height: 20px;
`;

const LinkStyle = styled.a`
    padding-left: 20px;
    text-decoration:none;
    color: #000000;
`;

class ContactMe extends Component {
    render() {
        return (
            <div>
                <TitleLine>Contact</TitleLine>
                <LinkStyle href="https://www.linkedin.com/in/liam-ballantyne/"><ImageSizer src="../static/LinkedIn.svg" />LinkedIn</LinkStyle>
                <br/>
                <LinkStyle href="https://github.com/ljjb97"><ImageSizer src="../static/GitHub-Mark.png"/>GitHub</LinkStyle>
                <br/>
                <LinkStyle>Email</LinkStyle>
            </div>
        );
    }
}

export default ContactMe;