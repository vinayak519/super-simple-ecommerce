import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Giftcard } from "../admin/giftcard-model";
import { GiftCardService } from "../admin/giftcard.service";
import { SharedDataService } from "./shared-data.service";


@Injectable()
export class ServerService{

    // private giftcardJson = JSON.stringify(this.gcService.getGiftcards());

    constructor(private httpClient: HttpClient,
        private gcService : GiftCardService,
        private sharedData : SharedDataService
    ){}

    // Post added giftcard
    postGiftCards(giftcard : Giftcard){
        return this.httpClient.post(
            'https://www.gogifters.com/api/post.php', 
            // this.gcService.getGiftcards(),
            giftcard,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }

    // get all the giftcards
    getGiftCards(){
        return this.httpClient.get(
            'https://www.gogifters.com/api/get.php', 
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (giftcard : Giftcard[]) => { 
                const giftcards : Giftcard[] = giftcard;
                // get and add to giftcards
                this.gcService.addNewGiftCard(giftcards);
            }
        )    
    }

    // Update added giftcard
    updateGiftCards(giftcard : any){
        return this.httpClient.post(
            'https://www.gogifters.com/api/update.php', 
            // this.gcService.getGiftcards(),
            giftcard,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        // .subscribe(
        //     (data) => { console.log(data) }
        // )    
    }

    // Delete giftcard
    deleteGiftCards(giftcard : Giftcard){
        return this.httpClient.post(
            'https://www.gogifters.com/api/delete.php', 
            // this.gcService.getGiftcards(),
            giftcard,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        // .subscribe(
        //     (data) => { console.log(data) }
        // )    
    }


    //Post IMage to server
    uploadNewCardImage(formData: any) {
        return this.httpClient.post(
            'https://www.gogifters.com/api/upload.php',
            formData
        )
        .subscribe(
          res => console.log(res)
        ),
        (err: HttpErrorResponse)=> {console.log(err)}
    }

    //User Giftcard send now
    postGcDetailsNow(gc_details : any){
        return this.httpClient.post(
            'https://www.gogifters.com/api/gc_send_now.php', 
            // this.gcService.getGiftcards(),
            gc_details,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }

    //User Giftcard Save for Later Date
    postGcDetailsLater(gc_details : any){
        return this.httpClient.post(
            'https://www.gogifters.com/api/gc_pending.php',
            // this.gcService.getGiftcards(),
            gc_details,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }
    
    //Feedback from users
    postfeedback(gc_feedback : any){
        return this.httpClient.post(
            'https://www.gogifters.com/api/gc_feedback.php', 
            gc_feedback,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }

    //Get the History Sent giftcards from email
    getMemories(senderEmail: string){
        return this.httpClient.post(
            'https://www.gogifters.com/api/gc_memories.php', 
            senderEmail,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => {
                this.sharedData.setData(data);
            }
        )
    }

    // ADMIN PANEL - GET ALL SENT EMAILS LIST
    
    // get all the giftcards
    getGcSent(){
        return this.httpClient.get(
            'https://www.gogifters.com/api/gc_sent.php', 
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (giftcard : Giftcard[]) => { 
                // get and add to giftcards
                this.sharedData.setSentGc(giftcard);
            }
        )    
    }
    
    // get all the  pending list
    getGcPending(){
        return this.httpClient.get(
            'https://www.gogifters.com/api/gc_sent_pending.php', 
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (giftcard : Giftcard[]) => { 
                // get and add to giftcards
                this.sharedData.setPendingGc(giftcard);
            }
        )    
    }


    
    /*----------------------------------
        PAID SEND AS ANONYMOUS - SEND NOW
    ------------------------------------*/
    gc_now_anonymous(gc_details : any){
        return this.httpClient.post(
            'https://www.gogifters.com/api/gc_now_anonymous.php', 
            // this.gcService.getGiftcards(),
            gc_details,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }

    /*--------------------------------------
        PAID SEND AS ANONYMOUS - SEND LATER
    ----------------------------------------*/
    gc_later_anonymous(gc_details : any){
        return this.httpClient.post(
            'https://www.gogifters.com/api/gc_later_anonymous.php', 
            // this.gcService.getGiftcards(),
            gc_details,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }
    



}