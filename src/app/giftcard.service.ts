import { EventEmitter } from "@angular/core";
import { Giftcard } from "./giftcard-model";


export class GiftCardService {

    giftCardChanged = new EventEmitter<Giftcard[]>();

    private giftCards : Giftcard[] = [
        new Giftcard(
            0,
            'First Card',
            'This is the first card',
            'www.placehold.it/650x450'
        )
    ]; 

    // Get All the Giftcards - global
    getGiftcards(){
        return this.giftCards.slice();
    }

    //get giftcard by Id
    getGiftcardById(index : number){
        return this.giftCards.slice()[index];
    }


    // Add GiftCard - add-giftcard.component.ts
    addNewGiftCard(giftcard: Giftcard[]){
        this.giftCards = giftcard;
        return this.giftCardChanged.emit(this.giftCards.slice());
    }

}