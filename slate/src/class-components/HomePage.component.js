import React from 'react';
import { HeaderComponent } from '../function-components/header-component';
import { FooterComponent } from '../function-components/footer-component';

export class HomePageComponent extends React.Component {

    page = <div>
        <HeaderComponent/>
        <FooterComponent/>
    </div>

    render() {
        return this.page;
    }
}