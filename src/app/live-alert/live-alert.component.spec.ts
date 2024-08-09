import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAlertComponent } from './live-alert.component';

describe('LiveAlertComponent', () => {
  let component: LiveAlertComponent;
  let fixture: ComponentFixture<LiveAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
