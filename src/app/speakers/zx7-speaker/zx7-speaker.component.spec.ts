import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zx7SpeakerComponent } from './zx7-speaker.component';

describe('Zx7SpeakerComponent', () => {
  let component: Zx7SpeakerComponent;
  let fixture: ComponentFixture<Zx7SpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zx7SpeakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zx7SpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
