import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/products.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList : any[] = [];
  productId : number;

  constructor( 
    private productService : ProductService,
    private storeService: StoreService,
    private cartService : CartService,
    private activatedRouter : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit() {
    this.productList = this.storeService.getProducts();

    // get the activated router
    this.activatedRouter.params.subscribe(
      (params : Params) =>{ 
        this.productId = +params['id'];        
        // check if the data is empy on the product list then send back to shop page
        if(this.productList == null || this.productList.length == 0){
          this.router.navigate(['/', 'shop']);
        }

      }
    );
  }

  // On add to cart
  addToCart(){
    // console.log(this.productList[0][this.productId]);
    var selectedProduct = this.productList[0][this.productId];
    this.cartService.setCartItem(selectedProduct);
  }


}
