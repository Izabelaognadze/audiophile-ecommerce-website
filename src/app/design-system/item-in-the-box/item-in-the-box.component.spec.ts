import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInTheBoxComponent } from './item-in-the-box.component';

describe('ItemInTheBoxComponent', () => {
  let component: ItemInTheBoxComponent;
  let fixture: ComponentFixture<ItemInTheBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInTheBoxComponent]
    });
    fixture = TestBed.createComponent(ItemInTheBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
