import { Component, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, CommonModule, ShopComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() public white = '';
  toggleOn = false;
  cardToggleOn = false;
}
