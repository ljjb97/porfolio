import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import TitleCanvas from './TitleCanvas';
import About from './About';
import Meta from './Meta';
import NavBar from './NavBar'

const theme = {
};

const PageGrid = styled.div`
    display:grid;
    grid-template-areas:
    'title title title'
    '. Nav .'
    'body body body';
`;

const TitleContainer = styled.div`
    grid-area: title;
    width:100%;
`;

const NavContainer = styled.div`
    grid-area: Nav;
    width: 100%;
`;

const BodyContainer = styled.div`
    grid-area: body;
`;

injectGlobal`
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
    }
    @font-face{
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') 
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Meta />
                    <PageGrid>
                        <TitleContainer>
                            <TitleCanvas />
                        </TitleContainer>
                        <NavContainer>
                            <NavBar />
                        </NavContainer>
                        <BodyContainer>
                            <About />
                        </BodyContainer>
                    </PageGrid>
                </div>
            </ThemeProvider>
        );
    }
}

export default Page;