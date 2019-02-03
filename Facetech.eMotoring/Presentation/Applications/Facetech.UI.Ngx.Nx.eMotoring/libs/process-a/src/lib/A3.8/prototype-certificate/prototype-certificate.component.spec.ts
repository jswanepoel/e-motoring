import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeCertificateComponent } from './prototype-certificate.component';

describe('PrototypeCertificateComponent', () => {
  let component: PrototypeCertificateComponent;
  let fixture: ComponentFixture<PrototypeCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypeCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
