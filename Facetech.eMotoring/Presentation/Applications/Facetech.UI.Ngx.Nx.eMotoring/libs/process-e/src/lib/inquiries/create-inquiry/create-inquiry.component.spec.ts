import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInquiryComponent } from './create-inquiry.component';

describe('CreateInquiryComponent', () => {
  let component: CreateInquiryComponent;
  let fixture: ComponentFixture<CreateInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
