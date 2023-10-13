import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-chekout',
  templateUrl: './item-chekout.component.html',
  styleUrls: ['./item-chekout.component.css']
})
export class ItemChekoutComponent {
  @Input() public goBackLink = "";
  @Input() public mobImg = "";
  @Input() public tabImg = "";
  @Input() public desImg = "";
  @Input() public newProduct = "";
  @Input() public header = "";
  @Input() public paragraph = "";
  @Input() public price = "";

  @Input() public size = 0;
  @Output() public changedSize = new EventEmitter<number>();

  constructor(){
    console.log(this.changedSize)
  }
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
}
