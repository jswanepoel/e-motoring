import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerCapturesCustomerQueryComponent } from './officer-captures-customer-query.component';

describe('OfficerCapturesCustomerQueryComponent', () => {
  let component: OfficerCapturesCustomerQueryComponent;
  let fixture: ComponentFixture<OfficerCapturesCustomerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerCapturesCustomerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerCapturesCustomerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
