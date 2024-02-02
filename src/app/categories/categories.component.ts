import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  product!: Product;
  productID!: string | null;

  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('id');
    console.log(this.productID);
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    // this.route.params.subscribe((params) => {
    //   const category = params['category'];
    //   this.productService
    //     .getProductByCategory(category)
    //     .subscribe((product) => {
    //       this.product = product;
    //     });
    // });
  }
}
