import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsToBuy } from 'src/app/shared/models/items-to-buy';

@Component({
  selector: 'app-card-toggle',
  templateUrl: './card-toggle.component.html',
  styleUrls: ['./card-toggle.component.css']
})
export class CardToggleComponent implements OnInit{
  cartItems : ItemsToBuy[]=[];
  @Input() public size = 0;
  @Output() public changedSize = new EventEmitter<number>;
  outputMessage:number = 1;

  dec() {
    this.resize(-1)
  }

  inc() {
    this.resize(+1)
  }

  resize(delta:number){
    this.size = Math.min(100, Math.max(0, + this.size + delta));
    this.changedSize.emit(this.size);
  }

  removeAll(){
    this.cartItems = []
  }

  getTotal(): number{
    return this.cartItems.reduce((sum, item) => 
    sum + item.price * item.amount, 0)
  }

  constructor(){
    this.cartItems = [
      {
        image : "assets/product-xx59-headphones/desktop/image-product.jpg",
        header : "XX59 MK II",
        price: 2999,
        amount : 1
      },
      {
        image : "assets/product-xx59-headphones/desktop/image-product.jpg",
        header : "XX99 MK II",
        price: 1000,
        amount : 2
      },
    ]
  }
  ngOnInit(): void {
    
  }
}
