import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  product: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.productService
        .getProductByCategory(+params['category'])
        .subscribe((d) => {
          this.product = d;
          console.log(d);
        });
    });
  }
}
