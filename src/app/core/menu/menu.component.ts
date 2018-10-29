import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cartItem : any[] = [];
  cartCount : number;

  constructor(
    private cartService : CartService
  ) { }

  ngOnInit() {
    this.cartItem = this.cartService.getCartItem();
    this.cartService.updatedCart
    .subscribe(
        (response) => {
          this.cartItem = response;
          this.cartCount = this.cartItem.length;
        }
    );
  }

}
