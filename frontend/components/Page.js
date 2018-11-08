import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import TitleCanvas from './TitleCanvas';
import About from './About';
import Meta from './Meta';

const theme = {
};

const PageGrid = styled.div`
    display:grid;
    grid-template-areas:
    'title'
    'body';
`;

const TitleContainer = styled.div`
    grid-area: title;
    width:100%;
`;

const BodyContainer = styled.div`
    grid-area: body;
    background-color: #ffcccc;
`;

injectGlobal`
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Roboto', sans-serif;
    }
    @font-face{
        font-family: 'Roboto', sans-serif;
        src: url('/static/Roboto-Thin.ttf') 
        format('tff');
        font-weight: normal;
        font-style: thin;
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