import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { BestGearComponent } from '../best-gear/best-gear.component';
import { ButtonDirective } from '../design-system/button.directive';
import { HeaderComponent } from '../header/header.component';
import { ShopComponent } from '../shop/shop.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    BestGearComponent,
    ButtonDirective,
    HeaderComponent,
    ShopComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
