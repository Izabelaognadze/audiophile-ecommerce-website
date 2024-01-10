import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url = 'http://localhost:3000/products';

  getAllItems() {
    return this.http.get<Item[]>(this.url);
  }
  constructor(private http: HttpClient) {}
}
