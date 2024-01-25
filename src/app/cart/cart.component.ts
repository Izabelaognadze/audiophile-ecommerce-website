import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../shared/models/product';
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

  constructor() {
    this.cartItems = [
      {
        id: 1,
        category: 'headphones',
        name: 'XX99 MARK II HEADPHONES',
        shortName: 'XX99 MK II',
        price: 2999,
        mobImg:
          'assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
        tabImg:
          'assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
        desImg:
          'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
        Img: 'assets/cart/image-xx99-mark-two-headphones.jpg',
        new: true,
        description:
          'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        reversed: false,
        amount: 2,
      },
      {
        id: 2,
        category: 'headphones',
        name: 'XX99 MARK I HEADPHONES',
        shortName: 'XX99 MK I',
        price: 1750,
        mobImg:
          'assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
        tabImg:
          'assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
        desImg:
          'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        Img: 'assets/cart/image-xx99-mark-one-headphones.jpg',
        new: false,
        description:
          'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        reversed: true,
        amount: 1,
      },
    ];
  }
}
