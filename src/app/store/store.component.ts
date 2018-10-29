import { Component } from "@angular/core";
import { CartService } from "../shared/cart.service";


@Component({
    selector: '<aap-store>',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']

})
export class StoreComponent {

    cartItem : any[] = [];
  
    constructor(
      private cartService : CartService
    ) { }
  
    ngOnInit() {
        this.cartItem = this.cartService.getCartItem();
        this.cartService.updatedCart
        .subscribe(
            (response) => {
                this.cartItem = response;
            }
        );

    }

}