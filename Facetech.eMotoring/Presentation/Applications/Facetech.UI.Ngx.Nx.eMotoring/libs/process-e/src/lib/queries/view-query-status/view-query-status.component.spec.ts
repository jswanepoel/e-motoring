import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueryStatusComponent } from './view-query-status.component';

describe('ViewQueryStatusComponent', () => {
  let component: ViewQueryStatusComponent;
  let fixture: ComponentFixture<ViewQueryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQueryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
