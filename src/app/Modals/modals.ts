import { NumberValueAccessor } from "@angular/forms";


import { CardsService } from "../service/cards.service";

export interface Cards {
        id:string;
        cardHolderName:string;
        cardNumber:string;
        expiryMonth:number;
        expiryYear:number;
        cvc:number;        
  }