import * as THREE from 'three';
import { ThreeHelper } from '../helpers/Three.helper';


export class ThreeService {

    threeHelper = new ThreeHelper();

    fieldOfView = 1;
    nearClippingPane = 1;
    farClippingPane = 1000;
    cameraPosition = [0,0,400];

    camera;

    material = new THREE.MeshToonMaterial();

    renderer;
    scene;
    canvasRef;

    oldVariantModel;


    async changeVariant(newVariantDetails) {
        const oldVariantModelSaved = this.oldVariantModel;
        await this.addVariant(newVariantDetails);
        this.removeModel(oldVariantModelSaved);
    }


    removeModel(model) {
        this.scene.remove(model);
    }

    async addVariant(variantDetails) {
        this.oldVariantModel = await this.addModel(variantDetails.modelUrl, this.scene);
    }
    async changeColor(model) {
        // const sofa = model.children[0].getObjectByName('Fermoy_Sofa')
        const sofa = model;
        sofa.children.forEach(cMesh => {
            cMesh.material.color = new THREE.Color(0xff0000);
        });
        return model;
    }

    async addModels( modelUrls, scene ) {
        modelUrls.forEach(modelUrl => {
            this.addModel(modelUrl, scene);
        });
    }

    async addModel(modelUrl, scene) {
        let model = await this.threeHelper.loadModel(modelUrl);
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
        scene.add(model);
        return model;
    }

    getUrlList(models) {
        return models.map((model) => model.modelUrl);
    }

    async createScene(selectedModelDetails) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0ffff);
        // this.scene.background = new THREE.Color(0x0000ff);

        const commonModels = this.getUrlList(selectedModelDetails.model.common);
        await this.addModels(commonModels, this.scene);

        // await this.addModel(selectedModelDetails.variant.modelUrl, this.scene);

        this.threeHelper.addSpotLight(this.scene);

        this.camera = this.threeHelper.createCamera(this.fieldOfView, this.nearClippingPane, this.farClippingPane, this.cameraPosition)

        this.renderer = this.threeHelper.createRenderer();
    
        this.controls = this.threeHelper.createOrbitControls(this.camera, this.renderer.domElement);
    }

    startRendBox(renderingContainerId) {
        this.renderer.domElement.id = 'rendering-op';

        const renderinContainer = document.getElementById(renderingContainerId);
        renderinContainer.appendChild( this.renderer.domElement );
    
        const thisRef = this;

        var animate = function () {
            requestAnimationFrame(animate);
            thisRef.controls.update();
            thisRef.renderer.render(thisRef.scene, thisRef.camera);
        };
        animate();
    }
}



