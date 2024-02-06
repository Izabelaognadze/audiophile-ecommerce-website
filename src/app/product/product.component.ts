import { Component, OnInit } from '@angular/core';
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
  youMayAlsoLikeProducts: Product[] = [];
  productIDs: number[] = [];
  size = 0;

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

    this.productService.getProducts().subscribe((products) => {
      this.productIDs = this.product[0].youMayAlsoLike;
      this.youMayAlsoLikeProducts = products.filter((product) =>
        this.productIDs.includes(product.id)
      );
      console.log(this.youMayAlsoLikeProducts);
    });
  }

  dec() {
    this.size--;
  }

  inc() {
    this.size++;
  }

  resize() {
    const productId = this.product[0]?.id;
    if (productId) {
      const newAmount =
        Math.min(100, Math.max(0, this.size)) + this.product[0].amount;
      this.productService
        .updateProductAmount(productId, newAmount)
        .subscribe(() => {
          console.log('updated successfully');
        });
    }
    window.location.reload();
    this.size = 0;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
      (err: string) => {
        console.error('Error updating product amount:', err);
      };
    });
  }
}
