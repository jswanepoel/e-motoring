import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyInterestComponent } from './verify-interest.component';

describe('VerifyInterestComponent', () => {
  let component: VerifyInterestComponent;
  let fixture: ComponentFixture<VerifyInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
