import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-in-the-box',
  templateUrl: './item-in-the-box.component.html',
  styleUrls: ['./item-in-the-box.component.css']
})
export class ItemInTheBoxComponent {
  @Input() public amount = "";
  @Input() public product = "";

  constructor(){}
}
