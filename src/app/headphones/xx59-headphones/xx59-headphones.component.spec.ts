import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xx59HeadphonesComponent } from './xx59-headphones.component';

describe('Xx59HeadphonesComponent', () => {
  let component: Xx59HeadphonesComponent;
  let fixture: ComponentFixture<Xx59HeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xx59HeadphonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Xx59HeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
