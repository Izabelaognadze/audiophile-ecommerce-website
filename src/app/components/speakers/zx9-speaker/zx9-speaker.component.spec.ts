import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zx9SpeakerComponent } from './zx9-speaker.component';

describe('Zx9SpeakerComponent', () => {
  let component: Zx9SpeakerComponent;
  let fixture: ComponentFixture<Zx9SpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Zx9SpeakerComponent]
    });
    fixture = TestBed.createComponent(Zx9SpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
