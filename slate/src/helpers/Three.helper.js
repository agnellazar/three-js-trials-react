import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



export class ThreeHelper {

    constructor() {
        this.gltfLoader = new GLTFLoader()
    }

    addSpotLight(scene) {
        const light = new THREE.AmbientLight(0xffffff, 5); // soft white light
        scene.add(light);
        // const sun = new THREE.DirectionalLight(0xffffff, 3)
        // sun.position.set(2, 3, 2);
        // scene.add(sun)
    }

    async applyTexture(model) {
        // return model
        const loader = new THREE.TextureLoader();
        const texturePng = loader.load('assets/textures/Fabric_sofa_BaseColor_V02.png');
        const pillowTexture = loader.load('assets/textures/Stripped_fabric_Pillow_Basecolor_V01.png');

        // const meshPhongMaterial = new THREE.MeshPhongMaterial();
        // meshPhongMaterial.color = new THREE.Color(0xffffff)
        // meshPhongMaterial.map = texturePng;

        console.log('model in apply texture', model);
        console.log('children got', model);
        const sofa = model;

        sofa.children.forEach(cMesh => {
            if (cMesh.name === "Pillow_side") {
                console.log('pillow found');
                cMesh.material.map = pillowTexture;
                cMesh.material.color = new THREE.Color(0xffffff);
            }
        });
        // model.children[0].getObjectByName('Fermoy_Sofa').material.map = meshPhongMaterial;
        // model = new THREE.SphereGeometry(1,36,36);

        // Mesh
        // const textureWrapper = new THREE.Mesh(model,meshPhongMaterial)


        return model;
    }

    createCamera(fieldOfView, nearClippingPane, farClippingPane, position) {
        const aspectRatio = window.innerWidth*0.8/ window.innerHeight*0.8;
        const camera = new THREE.PerspectiveCamera(
            fieldOfView,
            aspectRatio,
            nearClippingPane,
            farClippingPane
        )

        // this.camera.position.z = this.cameraZ;
        camera.position.set(...position);

        return camera
    }

    createOrbitControls(camera,domElement) {
        const controls = new OrbitControls(camera, domElement);

        controls.rotateSpeed = 0.4;
        controls.zoomSpeed = 0.3;
        controls.panSpeed = 0;

        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        return controls;
    }

    createRenderer() {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
        return renderer;
    }

    async loadModel(url) {
        const loadGLB = new Promise((res, rej) => {
            this.gltfLoader.load(url, (gltf) => {
                let model = gltf.scene;
                model.castShadow = true;
                res(model);
            });
        })
        const model = await loadGLB;
        return model;
    }

    async loadModels(urls) {
        // const modelUrls = [
        //     'assets/models/Sphere.glb',
        //     // 'assets/models/Sphere.glb',
        //     'assets/models/Monkey.glb',
        //     'assets/models/Torus.glb',
        //     'assets/models/Furniture_2.glb',
        //     // 'assets/models/Monkey.glb'
        // ]

        const modelList = [];

        for (let i = 0; i < urls.length; i++) {
            const model = await this.loadModel(urls[i]);
            model.position.set(0, -3.1, 0);
            modelList.push(model);
        }

        return modelList;
    }
}
