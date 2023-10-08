import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopButtonComponent } from './shop-button.component';

describe('ShopButtonComponent', () => {
  let component: ShopButtonComponent;
  let fixture: ComponentFixture<ShopButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopButtonComponent]
    });
    fixture = TestBed.createComponent(ShopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
