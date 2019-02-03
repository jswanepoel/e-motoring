import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePaymentInstructionComponent } from './generate-payment-instruction.component';

describe('GeneratePaymentInstructionComponent', () => {
  let component: GeneratePaymentInstructionComponent;
  let fixture: ComponentFixture<GeneratePaymentInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePaymentInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePaymentInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
