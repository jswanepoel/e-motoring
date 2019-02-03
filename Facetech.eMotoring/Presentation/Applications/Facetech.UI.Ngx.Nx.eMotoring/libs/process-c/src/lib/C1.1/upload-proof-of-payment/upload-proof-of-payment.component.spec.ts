import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProofOfPaymentComponent } from './upload-proof-of-payment.component';

describe('UploadProofOfPaymentComponent', () => {
  let component: UploadProofOfPaymentComponent;
  let fixture: ComponentFixture<UploadProofOfPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProofOfPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProofOfPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
