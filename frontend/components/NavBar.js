import React, { Component } from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
`;

const NavLink = styled.a`
    cursor: pointer;
    text-decoration:none;
    color: #000000;
`;


class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <NavLink onClick={() => {
                    document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
                }}>About</NavLink>
                <NavLink onClick={() => {
                    document.getElementById('MyProjects').scrollIntoView({ behavior: 'smooth' });
                }}>Projects</NavLink>
                <NavLink onClick={() => {
                    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
                }}>Contact</NavLink>
            </NavStyle>
        );
    }
}

export default NavBar;