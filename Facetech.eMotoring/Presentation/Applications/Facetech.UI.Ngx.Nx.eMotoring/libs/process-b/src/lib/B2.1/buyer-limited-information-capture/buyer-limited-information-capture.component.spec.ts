import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLimitedInformationCaptureComponent } from './buyer-limited-information-capture.component';

describe('BuyerInformationCaptureComponent', () => {
  let component: BuyerLimitedInformationCaptureComponent;
  let fixture: ComponentFixture<BuyerLimitedInformationCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerLimitedInformationCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerLimitedInformationCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
