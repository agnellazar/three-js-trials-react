import React from "react";
import { PriceBarComponent } from "./PriceBar.component";
import { OptionSelectionComponent } from "./OptionSelection.component";
import { ColorSelectionComponent } from "./ColorSelection.component";
import { HeaderComponent } from "../function-components/header-component";
import { FooterComponent } from "../function-components/footer-component";
// import { RenderingComponent } from "../function-components/Rendering.component";
import { ConnRenderingComponent } from "../state-mgmt/connected-components/ConnRenderingComponent";
export class CustomizeComponent extends React.Component {
        page = <div>
            <HeaderComponent/>
            <FooterComponent/>
            <PriceBarComponent/>
            <OptionSelectionComponent/>
            <ColorSelectionComponent/>
            <ConnRenderingComponent/>
        </div>

        render() {
            return this.page;
        }
}