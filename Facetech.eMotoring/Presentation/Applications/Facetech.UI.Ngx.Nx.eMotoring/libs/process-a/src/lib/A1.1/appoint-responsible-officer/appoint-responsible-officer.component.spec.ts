import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointResponsibleOfficerComponent } from './appoint-responsible-officer.component';

describe('AppointResponsibleOfficerComponent', () => {
  let component: AppointResponsibleOfficerComponent;
  let fixture: ComponentFixture<AppointResponsibleOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointResponsibleOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointResponsibleOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
