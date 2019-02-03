import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewSiteVisitComponent } from './request-new-site-visit.component';

describe('RequestNewSiteVisitComponent', () => {
  let component: RequestNewSiteVisitComponent;
  let fixture: ComponentFixture<RequestNewSiteVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewSiteVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewSiteVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
