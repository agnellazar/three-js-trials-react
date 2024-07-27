import React from 'react';
import { HeaderComponent } from '../function-components/header-component';
import { FooterComponent } from '../function-components/footer-component';
import { ProductSelectionComponent } from '../function-components/Product-selection-component';

export class HomePageComponent extends React.Component {

    page = <div>
        <HeaderComponent/>
        <ProductSelectionComponent></ProductSelectionComponent>
        <FooterComponent/>
    </div>

    render() {
        return this.page;
    }
}