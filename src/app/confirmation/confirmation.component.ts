import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDirective } from '../design-system/button.directive';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, ButtonDirective, RouterModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  products: Product[] = [];
  grandTotal = 1000;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((d) => {
      this.products = d.filter((i) => i.amount > 0);
    });
  }
}
