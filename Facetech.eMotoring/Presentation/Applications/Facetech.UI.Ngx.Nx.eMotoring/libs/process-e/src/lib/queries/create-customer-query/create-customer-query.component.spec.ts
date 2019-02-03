import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerQueryComponent } from './create-customer-query.component';

describe('CreateCustomerQueryComponent', () => {
  let component: CreateCustomerQueryComponent;
  let fixture: ComponentFixture<CreateCustomerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
