import { Component, OnInit, Input } from '@angular/core';
import {CardsService} from './service/cards.service'
import {Cards} from './Modals/modals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service:CardsService) {}
  
  CardsList:any=[];
  @Input() card:Cards ={
    id:"0",
    cardHolderName:"",
    cardNumber:"",
    expiryMonth:0,
    expiryYear:0,
    cvc:0
  };
  myCard!:Cards; 
  id!:string;
  cardHolderName!:string;
  cardNumber!:string;
  expiryMonth!:number;
  expiryYear!:number;
  cvc!:number;

  


  title = 'cards';
  
  
  

  ngOnInit(): void {
    this.refreshCardList();
  }
  addCard(){     
      var val:any = {
      cardHolderName:this.cardHolderName, 
      cardNumber:this.cardNumber,
      expiryMonth:this.expiryMonth, 
      expiryYear:this.expiryYear, 
      cvc:this.cvc};
      this.service.addCard(val).subscribe(res=>{      
      this.refreshCardList();
      
      })
      }

      getCardHolderName(item:any){
        this.card=item;
        console.log();

      }
    
      updateCard(card: Cards){ 
        
        
        //console.log(card)       
          //console.log(this.card.id)
                  
          this.service.updateCard(this.card.id, card).subscribe(res=>{      
          this.refreshCardList();
          //console.log(card);
          })
          }
    
    deleteClick(item:any) {
      if(confirm('Are you sure?')){
        this.service.deleteCard(item.id).subscribe(data=>{          
          this.refreshCardList();
        })
      }
    }  
  
    
  refreshCardList(){
    this.service.getAllCards().subscribe(data=>{
      console.log(data)
      this.CardsList=data;      
    });
  }

  
}
