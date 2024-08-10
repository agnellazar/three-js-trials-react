import { useEffect } from "react";
import '../styles/rendering.styles.scss'
import { ThreeService } from "../services/three.service";

const threeService = new ThreeService();

export function RenderingComponent(props) {
    const renderingContainerId = "rendering-container";
    useEffect(
        () => {
            startRendering(renderingContainerId, props.selectedModelDetails);
        },[props.selectedModelDetails.model]
    );

    useEffect(
        () => {
            changeVariant(props.selectedModelDetails.variant);
        },
        [props.selectedModelDetails.variant]
    )
    return <div id={renderingContainerId}></div>;
}

async function startRendering(renderingContainerId,selectedModelDetails) {
    await threeService.createScene(selectedModelDetails);
    threeService.startRendBox(renderingContainerId);
}


async function changeVariant(newVariantDetails) {
    await threeService.changeVariant(newVariantDetails);
}