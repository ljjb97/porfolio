import React, { Component } from 'react';
import * as THREE from 'three';

class WebCanvas extends Component {
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        const loader = new THREE.FontLoader();
        const group = new THREE.Group()

        const testText = loader.load( 'static/fonts/helvetiker_regular.typeface.json', ( font ) => {
            console.log(this);
            const geometry = new THREE.TextGeometry( "Hi my name is Liam Ballantyne", {
                font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5
            });
            
            const textMat = new THREE.MeshBasicMaterial(
                { color: 0xffffff, wireframe: false}
            );
            const text = new THREE.Mesh( geometry, textMat );
            group.add( text );
        });
        scene.add( group );
        console.log(scene);
        setTimeout(2000);

        window.addEventListener( 'resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize( width, height );
            camera.aspect = width / height;
            camera.updateProjectionMatrix;
        })

        //const geometry = new THREE.BoxGeometry(1, 1, 1);
        //const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true});
        //const cube = new THREE.Mesh(geometry, material);
        //scene.add( cube );
        //scene.add( loader );

        camera.position.z = 3;

        const update = () => {
            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.005;
        }

        const render = () =>  {
            renderer.render(scene, camera);
        }
        console.log('test 3');
        const infLoop = () => {
            requestAnimationFrame( infLoop );
            update();
            render();
        }
        infLoop();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default WebCanvas;