import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductByCategory(category: string) {
    const productUrl = `${this.url}/${category}`;
    return this.http.get<Product>(productUrl);
  }

  constructor(private http: HttpClient) {}
}
