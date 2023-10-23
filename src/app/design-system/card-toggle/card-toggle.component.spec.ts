import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToggleComponent } from './card-toggle.component';

describe('CardToggleComponent', () => {
  let component: CardToggleComponent;
  let fixture: ComponentFixture<CardToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardToggleComponent]
    });
    fixture = TestBed.createComponent(CardToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
