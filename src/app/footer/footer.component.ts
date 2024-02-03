import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  products: Product[] = [];
  constructor(ps: ProductService) {
    ps.getProducts().subscribe((d) => {
      this.products = d;
    });
  }
}
