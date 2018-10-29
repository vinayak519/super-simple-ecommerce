import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem: any[] = [];
  cartTotal : any = 0;

  cartQualtity: number = 1;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItem = this.cartService.getCartItem();
    this.cartService.updatedCart
    .subscribe(      
      (response) => {
        this.cartItem = response;
      }
    );
    
    // calculate for the cart item
    this.getTotal();

    if(this.cartItem.length == 0){
      this.router.navigate(['/', 'shop']);
    }
  }

  // Add item quantity
  addItem(productId){
    this.cartService.addMoreItems(productId);
    this.getTotal();
  }

  // Remove item quantity
  removeItem(productId){
    // console.log(productId);
    this.cartService.removeMoreItems(productId);
    this.getTotal();
  }

  // Remove Item from cart
  removeFromCart(index){
    this.cartService.removeFromCart(index);
    this.getTotal();
  }

  // Get cart total for all products
  public getTotal(){
    var sum = 0;
    this.cartItem.forEach( (item)=> {
      // console.log("before prce" + item.productTotal);
      sum = sum + item.productTotal;
    });
    this.cartTotal = sum;
  }
  


}
