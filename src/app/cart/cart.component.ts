import { Component } from '@angular/core';
import { Product } from '../shared/models/product';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../design-system/button.directive';
import { ProductService } from '../shared/services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ButtonDirective, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.filter((item) => item.amount > 0);
    });
  }

  dec(product: Product) {
    product.amount = Math.max(0, product.amount - 1);
    this.updateProductAmount(product.id, product.amount);
  }

  inc(product: Product) {
    product.amount = Math.min(100, product.amount + 1);
    this.updateProductAmount(product.id, product.amount);
  }

  updateProductAmount(productId: number, newAmount: number) {
    this.productService
      .updateProductAmount(productId, newAmount)
      .subscribe(() => {
        console.log('updated successfully');
      });
  }

  removeAll() {
    this.products.forEach((product) => {
      product.amount = 0;
      this.updateProductAmount(product.id, 0);
    });
  }

  getTotal(): number {
    return this.products.reduce(
      (total, product) => total + product.price * product.amount,
      0
    );
  }
}
