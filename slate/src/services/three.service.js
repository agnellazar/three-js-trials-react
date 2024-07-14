import * as THREE from 'three';
import { ThreeHelper } from '../helpers/Three.helper';

import { urls } from '../constants/urls.constants';



export class ThreeService {

    threeHelper = new ThreeHelper();

    // cameraZ = 400;
    fieldOfView = 1;
    nearClippingPane = 1;
    farClippingPane = 1000;
    cameraPosition = [0,0,400];

    // private camera !: THREE.PerspectiveCamera;
    camera;

    material = new THREE.MeshToonMaterial();
    // material = new THREE.TextureLoader().load("https://threejs.org/examples/textures/uv_grid_opengl.jpg");

    geometry = new THREE.BoxGeometry(2, 2, 1);
    cube = new THREE.Mesh(this.geometry, this.material);
    renderer;
    scene;
    canvasRef;





    addChangingModel(scene, index) {
        scene.add(this.modelsList[index]);
    }

    removeChangeingModel(scene, index) {
        this.scene.remove(this.modelsList[index]);
    }



    async changeColor(model) {
        // const sofa = model.children[0].getObjectByName('Fermoy_Sofa')
        const sofa = model;
        sofa.children.forEach(cMesh => {
            cMesh.material.color = new THREE.Color(0xff0000);
        });
        return model;
    }

    
    async addMainModel(scene) {
        this.mainModel = await this.threeHelper.loadModel(urls.models.rr2);
        this.mainModel.position.set(0, 0, 0);
        this.mainModel.scale.set(2, 2, 2);
        scene.add(this.mainModel);
    }

    async createScene(refContainer) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);

        await this.addMainModel(this.scene);

        this.threeHelper.addSpotLight(this.scene);

        this.camera = this.threeHelper.createCamera(this.fieldOfView, this.nearClippingPane, this.farClippingPane, this.cameraPosition)

        this.renderer = this.threeHelper.createRenderer();
    
        this.controls = this.threeHelper.createOrbitControls(this.camera, this.renderer.domElement);
    }

    startRendBox(refContainer) {
        document.body.appendChild( this.renderer.domElement );
    
        const thisRef = this;

        var animate = function () {
            requestAnimationFrame(animate);
            thisRef.controls.update();
            thisRef.renderer.render(thisRef.scene, thisRef.camera);
        };
        animate();
    }
}



