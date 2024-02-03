import { Component, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, CommonModule, ShopComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() public white = '';
  toggleOn = false;
  cardToggleOn = false;
}
