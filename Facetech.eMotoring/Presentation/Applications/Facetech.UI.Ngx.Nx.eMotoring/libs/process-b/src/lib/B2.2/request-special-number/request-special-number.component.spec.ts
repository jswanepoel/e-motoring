import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSpecialNumberComponent } from './request-special-number.component';

describe('RequestSpecialNumberComponent', () => {
  let component: RequestSpecialNumberComponent;
  let fixture: ComponentFixture<RequestSpecialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSpecialNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSpecialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
