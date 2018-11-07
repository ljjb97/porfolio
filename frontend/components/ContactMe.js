import React, { Component } from 'react';
import styled from 'styled-components';

const ImageSizer = styled.img`
    width: 20px;
    height: 20px;
`;

const LinkStyle = styled.a`
    text-decoration:none;
    color: #000000;
`;

const ContactList = styled.div`
    padding: 20px;
    margin: 10px;
    box-shadow: 2px 2px 4px #000000;
    border-radius: 50px;
    background-color: #f9f9f9;
    @media(max-width: 700px) {
        grid-template-columns: 1fr;
        margin: 10px;
    }
`;

class ContactMe extends Component {
    render() {
        return (
            <ContactList>
                <LinkStyle href="https://www.linkedin.com/in/liam-ballantyne/"><ImageSizer src="../static/LinkedIn.svg" />linkedin.com/in/liam-ballantyne</LinkStyle>
                <br/>
                <LinkStyle href="https://github.com/ljjb97"><ImageSizer src="../static/GitHub-Mark.png" />github.com/ljjb97</LinkStyle>
                <br/>
                <LinkStyle>Email</LinkStyle>
            </ContactList>
        );
    }
}

export default ContactMe;