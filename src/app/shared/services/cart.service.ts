import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {Subject, scan} from 'rxjs'
import { ProductAction } from './types/product-list-actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private newProduct$ =new Subject<ProductAction>;

  public productList$ = this.newProduct$.pipe(scan<ProductAction, Record<number, number | undefined>>((prev, cur)=>{
    let currentItem = prev[cur.id]
    if (cur.type === 'add'){
      if (currentItem=== undefined){
        currentItem = 0;
      }
      currentItem += 1;
    }
    else if (cur.type === 'remove'){
      if (currentItem === undefined){
        currentItem = 0;
      }
      else{
        currentItem -= 1;
      }
    }
    return {...prev, [cur.id]:currentItem};
  }, {}));
  
  addProduct(productId: number){
    this.newProduct$.next({
      type:'add',
      id : productId,
    });
  }

  removeProduct(productId: number){
    this.newProduct$.next({
      type:'remove',
      id: productId,
    });
  }

  constructor() { }
}
