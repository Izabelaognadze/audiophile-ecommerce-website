import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xx99MarkOneHeadphonesComponent } from './xx99-mark-one-headphones.component';

describe('Xx99MarkOneHeadphonesComponent', () => {
  let component: Xx99MarkOneHeadphonesComponent;
  let fixture: ComponentFixture<Xx99MarkOneHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xx99MarkOneHeadphonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Xx99MarkOneHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
