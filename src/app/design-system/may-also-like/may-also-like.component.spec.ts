import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayAlsoLikeComponent } from './may-also-like.component';

describe('MayAlsoLikeComponent', () => {
  let component: MayAlsoLikeComponent;
  let fixture: ComponentFixture<MayAlsoLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayAlsoLikeComponent]
    });
    fixture = TestBed.createComponent(MayAlsoLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
