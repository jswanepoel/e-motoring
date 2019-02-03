import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseShiftComponent } from './close-shift.component';

describe('CloseShiftComponent', () => {
  let component: CloseShiftComponent;
  let fixture: ComponentFixture<CloseShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
