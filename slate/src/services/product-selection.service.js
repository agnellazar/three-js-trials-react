import { productList } from "../assets/product-data/productList"

export class ProductSelectionService {

    async getProducts() {
        return productList;
    }

}