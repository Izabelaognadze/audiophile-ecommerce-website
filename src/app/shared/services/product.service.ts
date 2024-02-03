import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryList, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';

  private categories: CategoryList[] = [
    {
      id: 1,
      category: 'HEADPHONES',
    },
    {
      id: 2,
      category: 'SPEAKERS',
    },
    {
      id: 3,
      category: 'EARPHONES',
    },
  ];

  getAllCategories() {
    return this.categories;
  }

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProductByCategory(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  constructor(private http: HttpClient) {}
}
