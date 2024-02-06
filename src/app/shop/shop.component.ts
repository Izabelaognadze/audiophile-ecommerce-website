import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../shared/models/product';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, HttpClientModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  @Input() public mainImg = '';
  @Input() public title = '';
  @Input() public routerLink = '';
}
