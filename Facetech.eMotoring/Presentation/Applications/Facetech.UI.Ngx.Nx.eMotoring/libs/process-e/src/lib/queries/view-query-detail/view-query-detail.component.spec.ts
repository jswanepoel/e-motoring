import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueryDetailComponent } from './view-query-detail.component';

describe('ViewQueryDetailComponent', () => {
  let component: ViewQueryDetailComponent;
  let fixture: ComponentFixture<ViewQueryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQueryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
