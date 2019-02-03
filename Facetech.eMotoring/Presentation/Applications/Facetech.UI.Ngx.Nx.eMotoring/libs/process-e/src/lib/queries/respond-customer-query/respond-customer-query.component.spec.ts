import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondCustomerQueryComponent } from './respond-customer-query.component';

describe('RespondCustomerQueryComponent', () => {
  let component: RespondCustomerQueryComponent;
  let fixture: ComponentFixture<RespondCustomerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondCustomerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondCustomerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
