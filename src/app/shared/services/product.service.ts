import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(`${this.url}?category=${category}`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  constructor(private http: HttpClient) {}
}
