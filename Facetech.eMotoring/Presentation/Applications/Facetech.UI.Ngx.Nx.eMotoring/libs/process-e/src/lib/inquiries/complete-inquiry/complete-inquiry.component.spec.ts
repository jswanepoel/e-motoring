import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInquiryComponent } from './complete-inquiry.component';

describe('CompleteInquiryComponent', () => {
  let component: CompleteInquiryComponent;
  let fixture: ComponentFixture<CompleteInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
