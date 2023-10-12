import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-button',
  templateUrl: './shop-button.component.html',
  styleUrls: ['./shop-button.component.css']
})
export class ShopButtonComponent {
  @Input() public mainImg = "";
  @Input() public title = "";
  @Input() public productType = "";
  @Input() public routerLink = "";
}
