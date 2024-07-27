import { ProductCardComponent } from "./Product-Card-Component";

import { ProductSelectionService } from "../services/product-selection.service";

import '../../src/styles/product-selection-styles.css'
import { useEffect, useState } from "react";
const productSelectionService = new ProductSelectionService();
export function ProductSelectionComponent() {
    
    const [productItems, setProductItems] = useState([]);

    useEffect(()=> {
        productSelectionService.getProducts().then((productList) => {
            let newProductItems = [];
            for (let i =0; i< productList.length; i++) {
                const item = productList[i];
                newProductItems.push(<ProductCardComponent item = {item} key={i}></ProductCardComponent>);
            }
            setProductItems(newProductItems);
        });
    },[]);


    const content = 
    <div id="product-list-wrapper" className="container  p-4">
        {productItems}
    </div>

    return content
}