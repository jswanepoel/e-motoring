import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyImportCertificateComponent } from './identify-import-certificate.component';

describe('IdentifyImportCertificateComponent', () => {
  let component: IdentifyImportCertificateComponent;
  let fixture: ComponentFixture<IdentifyImportCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyImportCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyImportCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
