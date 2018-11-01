import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/shared/products.service';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : any;

  constructor(private productlist : ProductService, 
    private storeService: StoreService) { }

  ngOnInit() {
    this.productList = this.storeService.getProducts();
  }
}
