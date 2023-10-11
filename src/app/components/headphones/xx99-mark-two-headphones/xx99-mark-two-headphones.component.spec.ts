import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xx99MarkTwoHeadphonesComponent } from './xx99-mark-two-headphones.component';

describe('Xx99MarkTwoHeadphonesComponent', () => {
  let component: Xx99MarkTwoHeadphonesComponent;
  let fixture: ComponentFixture<Xx99MarkTwoHeadphonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Xx99MarkTwoHeadphonesComponent]
    });
    fixture = TestBed.createComponent(Xx99MarkTwoHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
