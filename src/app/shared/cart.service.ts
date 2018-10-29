import { EventEmitter } from "@angular/core";

export class CartService{
    updatedCart = new EventEmitter<any>();

    productCart : any[] = [{
        "id": "0",
        "imgUrl": "http://placehold.it/450x450",
        "name": "CHECK PRINT SHIRT",
        "price": 110,
        "quantity": 1,
        "productTotal": 110
    },{
        "id": "1",
        "imgUrl": "http://placehold.it/450x450",
        "name": "OTHERS",
        "price": 240,
        "quantity": 1,
        "productTotal": 240
    }];

    getCartItem(){
        return this.productCart;
    }

    setCartItem(product){
        if(this.productCart.indexOf(product) == -1){
            this.productCart.push(product);
            return this.updatedCart.emit(this.productCart);
        }
        else{
            alert('Product Already Added!');
        }
    }

    // Add more items
    addMoreItems(index){
        this.productCart[index].quantity++;

        // Calculate for Total of quantity individual price
        var currPrice = this.productCart[index].price;
        var currQuantity = this.productCart[index].quantity;
        var totalProduct = currPrice * currQuantity;
        this.productCart[index].productTotal = totalProduct;

        return this.updatedCart.emit(this.productCart);
    }

    // Remove items
    removeMoreItems(index){
        var currentItem = this.productCart[index].quantity;

        if(currentItem > 1){
            this.productCart[index].quantity--;

            // Calculate for Total of quantity individual price
            var currPrice = this.productCart[index].price;
            var currQuantity = this.productCart[index].quantity;
            var totalProduct = currPrice * currQuantity;
            this.productCart[index].productTotal = totalProduct;

            return this.updatedCart.emit(this.productCart);
        }
    }

    // Remove product from cart
    removeFromCart(index){
        this.productCart.splice(index, 1);
        return this.updatedCart.emit(this.productCart);
    }

}