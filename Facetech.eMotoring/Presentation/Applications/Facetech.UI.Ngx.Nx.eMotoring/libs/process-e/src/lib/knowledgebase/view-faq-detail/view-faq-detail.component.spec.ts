import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFaqDetailComponent } from './view-faq-detail.component';

describe('ViewFaqDetailComponent', () => {
  let component: ViewFaqDetailComponent;
  let fixture: ComponentFixture<ViewFaqDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFaqDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFaqDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
