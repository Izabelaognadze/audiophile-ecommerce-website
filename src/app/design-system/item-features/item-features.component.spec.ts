import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFeaturesComponent } from './item-features.component';

describe('ItemFeaturesComponent', () => {
  let component: ItemFeaturesComponent;
  let fixture: ComponentFixture<ItemFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemFeaturesComponent]
    });
    fixture = TestBed.createComponent(ItemFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
