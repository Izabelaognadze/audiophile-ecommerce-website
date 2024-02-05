import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BestGearComponent } from '../best-gear/best-gear.component';
import { ShopComponent } from '../shop/shop.component';
import { ButtonDirective } from '../design-system/button.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    BestGearComponent,
    ShopComponent,
    RouterModule,
    ButtonDirective,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  @Input() public size = 0;
  @Output() public changedSize = new EventEmitter<number>();

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.productService.getProductById(+params['id']).subscribe((d) => {
        this.product = [d];
      });
    });

    this.changedSize.emit(this.outputMessage);
    console.log(this.changedSize);
  }

  outputMessage: number = 1;
  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(100, Math.max(0, +this.size + delta));
    this.changedSize.emit(this.size);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
