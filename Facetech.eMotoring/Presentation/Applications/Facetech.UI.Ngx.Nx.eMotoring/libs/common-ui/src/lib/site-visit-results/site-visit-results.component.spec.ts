import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitResultsComponent } from './site-visit-results.component';

describe('SiteVisitResultsComponent', () => {
  let component: SiteVisitResultsComponent;
  let fixture: ComponentFixture<SiteVisitResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVisitResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
