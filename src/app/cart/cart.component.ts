import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, Product } from '../shared/models/product';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../design-system/button.directive';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [];
  @Input() public size = 0;
  @Output() public changedSize = new EventEmitter<number>();
  outputMessage: number = 1;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((d) => {
      this.products = d.filter((i) => i.amount > 0);
    });
  }

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(d: number) {
    this.size = Math.min(100, Math.max(0, +this.size + d));
    this.changedSize.emit(this.size);
  }

  removeAll() {
    this.products = [];
  }

  getTotal(): number {
    return this.products.reduce(
      (sum, item) => (sum + item.price * item.amount) * 1.2 + 50,
      0
    );
  }
}
