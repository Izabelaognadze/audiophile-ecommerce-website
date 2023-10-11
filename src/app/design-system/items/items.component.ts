import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input () imgMob = "";
  @Input () imgTab = "";
  @Input () imgDesk = "";
  @Input () title = "";
  @Input () text = "";
  @Input () reversed = "";
  @Input () newProduct = "";
  @Input() linkTo = "";
  
  constructor(){}
}
