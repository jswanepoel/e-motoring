import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAttendeesComponent } from './select-attendees.component';

describe('SelectAttendeesComponent', () => {
  let component: SelectAttendeesComponent;
  let fixture: ComponentFixture<SelectAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
