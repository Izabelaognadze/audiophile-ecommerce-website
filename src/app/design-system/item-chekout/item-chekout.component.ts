import { Component, Input } from '@angular/core';

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
}
