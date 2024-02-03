import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, Product } from '../shared/models/product';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../design-system/button.directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: Product[] = [];
  @Input() public size = 0;
  @Output() public changedSize = new EventEmitter<number>();
  outputMessage: number = 1;

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
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
  }
}
