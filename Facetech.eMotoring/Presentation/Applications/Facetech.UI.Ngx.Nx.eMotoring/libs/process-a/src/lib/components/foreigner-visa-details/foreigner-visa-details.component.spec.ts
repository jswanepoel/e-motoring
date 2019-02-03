import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignerVisaDetailsComponent } from './foreigner-visa-details.component';

describe('ForeignerVisaDetailsComponent', () => {
  let component: ForeignerVisaDetailsComponent;
  let fixture: ComponentFixture<ForeignerVisaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignerVisaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignerVisaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
