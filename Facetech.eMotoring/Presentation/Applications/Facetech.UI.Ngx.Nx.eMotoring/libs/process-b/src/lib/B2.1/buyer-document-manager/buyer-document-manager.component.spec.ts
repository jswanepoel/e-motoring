import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDocumentManagerComponent } from './buyer-document-manager.component';

describe('BuyerDocumentManagerComponent', () => {
  let component: BuyerDocumentManagerComponent;
  let fixture: ComponentFixture<BuyerDocumentManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDocumentManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDocumentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
