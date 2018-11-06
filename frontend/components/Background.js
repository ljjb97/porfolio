import React, { Component } from 'react';
import styled from 'styled-components';
import TriangleBacking from './TriangleBacking';

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
        var k = 0;

        const update = (time) => {
            TriangleBacking(195, 100, k, window.innerWidth, window.innerHeight, 25, '#00a0fc', "titleBack");
            k += 0.1;
            if (k > 100) {
                k = 0;
            }
            requestAnimationFrame(update)
        }

        update(k);
        this.refs.background.style.height = window.innerHeight.toString() + 'px'
        //remove the backer that rendered on the server to display something while the actual background is loaded clientside
        background.removeChild(this.refs.background.childNodes[0]);
    }


    render() {
        return (
            <div ref="background" id="background">
                <Backer />
                <canvas id="titleBack"></canvas>
            </div>
        );
    }
}

export default Background;