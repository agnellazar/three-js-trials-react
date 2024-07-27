import React from "react";
import '../styles/rendering.styles.scss'

// import * as THREE from 'three'
import { 
    // useEffect,
    useRef
 } from "react";
import { ThreeService } from "../services/Three.service";

const threeService = new ThreeService();

export function RenderingComponent() {
    let refContainer = useRef(null);
    // const page;
    // useEffect( () =>{

    // },[])
    // addRenderer(refContainer);
    startRendering(refContainer);
    return <div id="rendering-op" ref={refContainer}></div>;
}

async function startRendering(refContainer) {
    await threeService.createScene(refContainer);
    threeService.startRendBox(refContainer);
}

// function addRenderer(refContainer) {
//     // var scene = new THREE.Scene(); 
//     // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     // var renderer = new THREE.WebGLRenderer();
//     // renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
//     // document.body.appendChild( renderer.domElement );
//     // console.log('ref.current',refContainer.current)
//     // var geometry = new THREE.BoxGeometry(1, 1, 1);
//     // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     // var cube = new THREE.Mesh(geometry, material);
//     // scene.add(cube);
//     // camera.position.z = 5;
//     var animate = function () {
//         requestAnimationFrame(animate);
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         renderer.render(scene, camera);
//     };
//     animate();
// }
