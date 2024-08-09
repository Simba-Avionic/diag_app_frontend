import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleModalComponent } from './console-modal.component';

describe('ConsoleModalComponent', () => {
  let component: ConsoleModalComponent;
  let fixture: ComponentFixture<ConsoleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
