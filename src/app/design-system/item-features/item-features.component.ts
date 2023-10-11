import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-features',
  templateUrl: './item-features.component.html',
  styleUrls: ['./item-features.component.css']
})
export class ItemFeaturesComponent {
  @Input() public textStart = "";
  @Input() public textEnd = "";
}
