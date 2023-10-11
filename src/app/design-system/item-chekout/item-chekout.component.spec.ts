import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChekoutComponent } from './item-chekout.component';

describe('ItemChekoutComponent', () => {
  let component: ItemChekoutComponent;
  let fixture: ComponentFixture<ItemChekoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemChekoutComponent]
    });
    fixture = TestBed.createComponent(ItemChekoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
