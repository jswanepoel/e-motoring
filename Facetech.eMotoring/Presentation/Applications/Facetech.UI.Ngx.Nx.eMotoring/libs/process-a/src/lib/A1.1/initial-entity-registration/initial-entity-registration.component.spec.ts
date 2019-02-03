import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialEntityRegistrationComponent } from './initial-entity-registration.component';

describe('InitialEntityRegistrationComponent', () => {
  let component: InitialEntityRegistrationComponent;
  let fixture: ComponentFixture<InitialEntityRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialEntityRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialEntityRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
