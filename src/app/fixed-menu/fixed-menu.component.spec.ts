import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedMenuComponent } from './fixed-menu.component';

describe('FixedMenuComponent', () => {
  let component: FixedMenuComponent;
  let fixture: ComponentFixture<FixedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixedMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
