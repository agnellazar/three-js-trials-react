import React from "react";
import '../styles/rendering.styles.scss'

import * as THREE from 'three'
import { useEffect, useRef } from "react";

export function RenderingComponent() {
    let refContainer = useRef(null);
    const page = <div ref={refContainer}></div>
    useEffect( () =>{
        var scene = new THREE.Scene(); 
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        console.log('ref.current',refContainer.current)
        // childNodes.find(()=>{return childNodes.nodeName === 'CANVAS'}))
        // refContainer.current
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
        
    },[])
    return page;
}