import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerInformationCaptureComponent } from './buyer-information-capture.component';

describe('BuyerInformationCaptureComponent', () => {
  let component: BuyerInformationCaptureComponent;
  let fixture: ComponentFixture<BuyerInformationCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerInformationCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerInformationCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
