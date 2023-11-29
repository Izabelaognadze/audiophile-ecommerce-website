import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { productList } from '../constants/product-list'

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add multiple items on cart', () => {
    service.addProduct(1)
    service.addProduct(2)
  });

  it('should add item on cart', () =>{
    const number = 1
    const product = productList.find(product => product.id === number)
    service.addProduct(number)

    service.productList$.subscribe((list) =>{
      expect(list[number]).toEqual(1)
    });
  });

});
