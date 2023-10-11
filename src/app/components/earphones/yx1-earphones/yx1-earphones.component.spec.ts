import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yx1EarphonesComponent } from './yx1-earphones.component';

describe('Yx1EarphonesComponent', () => {
  let component: Yx1EarphonesComponent;
  let fixture: ComponentFixture<Yx1EarphonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Yx1EarphonesComponent]
    });
    fixture = TestBed.createComponent(Yx1EarphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
