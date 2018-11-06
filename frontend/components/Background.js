import React, { Component } from 'react';
import styled from 'styled-components';

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
        const canvas = document.querySelector('canvas');
        canvas.style.backgroundColor = '#00a0fc';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const c = canvas.getContext('2d');

        const Triangle = (ax, ay, bx, by, cx, cy, fs) => {
            c.fillStyle = fs;
            c.beginPath();
            c.moveTo(ax, ay);
            c.lineTo(bx, by);
            c.lineTo(cx, cy);
            c.fill();
        };

        const hslToHex = (h, s, l) => {
            h /= 360;
            s /= 100;
            l /= 100;
            let r, g, b;
            if (s === 0) {
                r = g = b = l; // achromatic
            } else {
                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            const toHex = x => {
                const hex = Math.round(x * 255).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            };
            return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        }

        //Takes a single number and returns a two digit number between 25 and 75
        const DumbHash = (s) => {
            for (var k = 0, h = 0; k < s.length; k++)
                h = Math.imul(31, h) + s.charCodeAt(k) | 0;
            const ArrStr = (("" + h).split(""));
            const l = ArrStr.length;
            return ((ArrStr[l - 2] + ArrStr[l - 1]) / 2 + 25);
        }
        
        //Takes a k value which increases each frame and the i, j and x value to set the specific triangle
        const HexGen = (i, j, x, k) => {
            const Hash = DumbHash(((i + x) * (j + x)).toString());
            const Fader = () => {
                if (Hash + k >= 75) {
                    if (75 - (Hash + k - 75) <= 25) {
                        return 25 + 25 - (75 - (Hash + k - 75));
                    } else {
                        return 75 - (Hash + k - 75);
                    }
                } else {
                    return Hash + k;
                }
            }
            return hslToHex(195, 100, Fader());
        }

        //Takes a k value to pass to hex gen
        //Uses a for loop to generate each frame of the background
        const init = (k) => {
            for (let i = 0; i < window.innerWidth; i += 60) {
                for (let j = 25; j < window.innerHeight + 50; j += 60) {
                    Triangle(i, j - 50, i + 25, j - 75, i + 25, j - 25, HexGen(i, j, 1, k));
                    Triangle(i + 55, j - 50, i + 30, j - 25, i + 30, j - 75, HexGen(i, j, 2, k));
                    Triangle(i, j + 5, i + 25, j - 20, i, j - 45, HexGen(i, j, 3, k));
                    Triangle(i + 55, j + 5, i + 30, j - 20, i + 55, j - 45, HexGen(i, j, 4, k));
                }
            }
        }

        var k = 0;

        const update = (time) => {
            init(k);
            k += 0.1;
            if (k > 100) {
                k = 0;
            }
            requestAnimationFrame(update)
        }

        update(k);

        //remove the backer that rendered on the server to display something while the actual background is loaded clientside
        background.removeChild(this.refs.background.childNodes[0]);
    }


    render() {
        return (
            <div ref="background" id="background">
                <Backer />
                <canvas></canvas>
            </div>
        );
    }
}

export default Background;