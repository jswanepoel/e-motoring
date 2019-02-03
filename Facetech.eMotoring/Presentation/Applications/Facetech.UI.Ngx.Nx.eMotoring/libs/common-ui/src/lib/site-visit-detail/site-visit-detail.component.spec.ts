import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitDetailComponent } from './site-visit-detail.component';

describe('SiteVisitDetailComponent', () => {
  let component: SiteVisitDetailComponent;
  let fixture: ComponentFixture<SiteVisitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVisitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
