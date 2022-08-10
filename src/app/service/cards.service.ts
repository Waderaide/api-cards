import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cards } from '../Modals/modals'; 

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseUrl = 'https://cardsappwade.azurewebsites.net/api/cards';

  constructor(private http:HttpClient) { }

  //Get All Cards
  getAllCards():Observable<any[]>{
    return this.http.get<any>(this.baseUrl+"/get-all");
  }

  addCard(val: any){
    
        
    return this.http.post(this.baseUrl+'/add/', val);
  }

  deleteCard(val:any){
    return this.http.delete(this.baseUrl+'/delete/'+val);
  }

  updateCard(id: string, card: Cards) {
    
    
    
     console.log(card.id); 
           
     return this.http.put<Cards>(this.baseUrl+'/' + card.id, card);
     
   }
  
}
