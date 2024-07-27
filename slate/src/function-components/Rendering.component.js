import { useEffect } from "react";
import '../styles/rendering.styles.scss'
import { ThreeService } from "../services/three.service";

const threeService = new ThreeService();

export function RenderingComponent() {
    useEffect(
        () => {
            startRendering();
            return () => {
                const canvasParent = document.getElementById('rendering-op');
                document.body.removeChild(canvasParent);
            }
        },
        []
        );
    return <div></div>;
}

async function startRendering() {
    await threeService.createScene();
    threeService.startRendBox();
}
