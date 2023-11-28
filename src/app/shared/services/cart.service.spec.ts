import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product', () => {
    service.productList$.subscribe((list) => {
      expect(list).toEqual([
        { id: 1, name: 'string', price: 'string', imageUrl: 'string' },
      ]);
    });
    service.addProduct({
      id: 1,
      name: 'string',
      price: 'string',
      imageUrl: 'string',
    });
  });

  it('should add multiple products', () => {
    service.addProduct({
      id: 1,
      name: 'string',
      price: 'string',
      imageUrl: 'string',
    });
    
    service.addProduct({
      id: 2,
      name: 'string2',
      price: 'string2',
      imageUrl: 'string2',
    });

    service.productList$.subscribe((list) => {
      expect(list).toEqual([
        { id: 1, name: 'string', price: 'string', imageUrl: 'string' },
        { id: 2, name: 'string2', price: 'string2', imageUrl: 'string2' },
      ]);
    });

  });
});
