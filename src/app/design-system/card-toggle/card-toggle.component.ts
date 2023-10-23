import { Component, OnInit } from '@angular/core';
import { ItemsToBuy } from 'src/app/items-to-buy';

@Component({
  selector: 'app-card-toggle',
  templateUrl: './card-toggle.component.html',
  styleUrls: ['./card-toggle.component.css']
})
export class CardToggleComponent implements OnInit{
  cartItems : ItemsToBuy[]=[];

  constructor(){
    this.cartItems = [
      {
        image : "url('assets/cart/image-xx59-headphones.jpg')",
        header : "XX99 MK II",
        price: 2999,
        amount : 1
      },
    ]
  }
  ngOnInit(): void {
    
  }
}
