import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailForSiteVisitComponent } from './entity-detail-for-site-visit.component';

describe('EntityDetailForSiteVisitComponent', () => {
  let component: EntityDetailForSiteVisitComponent;
  let fixture: ComponentFixture<EntityDetailForSiteVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailForSiteVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailForSiteVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
