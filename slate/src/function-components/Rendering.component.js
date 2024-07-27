import { useEffect } from "react";
import '../styles/rendering.styles.scss'
import { ThreeService } from "../services/three.service";

const threeService = new ThreeService();

export function RenderingComponent(props) {
    const renderingContainerId = "rendering-container";
    useEffect(
        () => {
            console.log('props in rendering comp',props)
            startRendering(renderingContainerId,props.item?.modelUrl);
        },
        // []
        );
    return <div id={renderingContainerId}></div>;
}

async function startRendering(renderingContainerId,modelUrl) {
    await threeService.createScene(modelUrl);
    threeService.startRendBox(renderingContainerId);
}
