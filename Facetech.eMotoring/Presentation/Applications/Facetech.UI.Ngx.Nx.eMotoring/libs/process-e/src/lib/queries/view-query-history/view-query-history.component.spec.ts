import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueryHistoryComponent } from './view-query-history.component';

describe('ViewQueryHistoryComponent', () => {
  let component: ViewQueryHistoryComponent;
  let fixture: ComponentFixture<ViewQueryHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQueryHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
