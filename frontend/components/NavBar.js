import React, { Component } from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
    height: 100px;
    background-image: linear-gradient(-90deg, #89cff0, #77c2e5);
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-left: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /*border-bottom: 5px solid #006080; */
`;

const NavLink = styled.a`
    font-size: 2em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration:none;
    color: #FFFFFF;
`;


class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <NavLink>{this.props.children}</NavLink>
            </NavStyle>
        );
    }
}

export default NavBar;