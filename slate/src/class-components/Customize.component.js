import React from "react";

import '../styles/general.scss'

import { PriceBarComponent } from "./PriceBar.component";
import { OptionSelectionComponent } from "./OptionSelection.component";
import { ColorSelectionComponent } from "../function-components/ColorSelection.component";
import { HeaderComponent } from "../function-components/header-component";
import { FooterComponent } from "../function-components/footer-component";
import { ConnColorSelectionComponent } from "../state-mgmt/connected-components/ConnColorSelection.component";
import { ConnRenderingComponent } from "../state-mgmt/connected-components/ConnRendering.component";
export class CustomizeComponent extends React.Component {
        page = <div className="overflow-hidden w-100 h-100vh">
            <div className="header-spacer"></div>
            <div className="footer-spacer"></div>

            <HeaderComponent/>
            <FooterComponent/>

            <PriceBarComponent/>
            <OptionSelectionComponent/>
            <ConnColorSelectionComponent/>
            <ConnRenderingComponent/>
        </div>

        render() {
            return this.page;
        }
}