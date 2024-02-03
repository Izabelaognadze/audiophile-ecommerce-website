import { Component } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  product: Product[] = [];

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.productService.getProductByCategory(+params['id']).subscribe((d) => {
        this.product = [d];
      });
    });
  }
}
