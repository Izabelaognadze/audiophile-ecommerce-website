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

  constructor() {
    this.cartItems = [
      {
        id: 1,
        category: Category.EARPHONES,
        name: 'XX99 MARK II HEADPHONES',
        shortName: 'XX99 MK II',
        price: 2999,
        mobileImg:
          'assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
        tabletImg:
          'assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
        desktopImg:
          'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
        genericImg: 'assets/cart/image-xx99-mark-two-headphones.jpg',
        new: true,
        description:
          'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        reversed: false,
        amount: 2,
        galleryMobImg1:
          'assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
        galleryMobImg2:
          'assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
        galleryMobImg3:
          'assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
        galleryTabImg1:
          'assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
        galleryTabImg2:
          'assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
        galleryTabImg3:
          'assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
        galleryDesImg1:
          'assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
        galleryDesImg2:
          'assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
        galleryDesImg3:
          'assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
      },
      {
        id: 2,
        category: Category.HEADPHONES,
        name: 'XX99 MARK I HEADPHONES',
        shortName: 'XX99 MK I',
        price: 1750,
        mobileImg:
          'assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
        tabletImg:
          'assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
        desktopImg:
          'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        genericImg: 'assets/cart/image-xx99-mark-one-headphones.jpg',
        new: false,
        description:
          'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        reversed: true,
        amount: 1,
        galleryMobImg1:
          'assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
        galleryMobImg2:
          'assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
        galleryMobImg3:
          'assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
        galleryTabImg1:
          'assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
        galleryTabImg2:
          'assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
        galleryTabImg3:
          'assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
        galleryDesImg1:
          'assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
        galleryDesImg2:
          'assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
        galleryDesImg3:
          'assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
      },
    ];
  }
}
