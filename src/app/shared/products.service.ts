import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { StoreService } from "../store/store.service";

@Injectable()
export class ProductService{

    constructor(private httpClient: HttpClient,
        private storeService: StoreService){}

    getProducts(){
        return this.httpClient.get('http://localhost:4200/product.json')
        .subscribe(
            (data) => { 
                this.storeService.setProducts(data);
            }
        );
    }

}