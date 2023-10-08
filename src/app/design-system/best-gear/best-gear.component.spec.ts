import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGearComponent } from './best-gear.component';

describe('BestGearComponent', () => {
  let component: BestGearComponent;
  let fixture: ComponentFixture<BestGearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestGearComponent]
    });
    fixture = TestBed.createComponent(BestGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
