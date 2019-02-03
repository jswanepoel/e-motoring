import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricFingerPrintComponent } from './biometric-finger-print.component';

describe('BiometricFingerPrintComponent', () => {
  let component: BiometricFingerPrintComponent;
  let fixture: ComponentFixture<BiometricFingerPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricFingerPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiometricFingerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
