import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaintDetailComponent } from './view-complaint-detail.component';

describe('ViewComplaintDetailComponent', () => {
  let component: ViewComplaintDetailComponent;
  let fixture: ComponentFixture<ViewComplaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComplaintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
