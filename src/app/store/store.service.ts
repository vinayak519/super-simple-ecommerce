import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class StoreService {
    updatedProduct = new EventEmitter<any>();

    productList : any[] = [];

    getProducts(){
        return this.productList;
    }

    setProducts(items){
        if(this.productList.length >= 0){
            this.productList.push(items);
        }
    }

    getProductById(index: number){
        return this.productList[0][index];
    }


}