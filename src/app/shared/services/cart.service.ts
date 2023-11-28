import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {Subject, scan} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private newProduct$ =new  Subject<Product>;
  public productList$ = this.newProduct$.pipe(scan<Product, Product[]>((prev, cur)=>{
    return [...prev, cur];
  }, []));
  
  addProduct(product: Product){
    this.newProduct$.next(product);
  }

  constructor() { }
}
