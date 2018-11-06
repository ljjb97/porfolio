import React, { Component } from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
    height: 100px;
    background-color: #006080;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: left;
    padding-left: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-bottom: 5px solid #00a0fc;
`;

const NavLink = styled.a`
    font-size: 2em;
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