import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcListComponent } from './dtc-list.component';

describe('DtcListComponent', () => {
  let component: DtcListComponent;
  let fixture: ComponentFixture<DtcListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DtcListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
