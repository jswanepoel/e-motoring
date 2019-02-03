import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOwnerInterestComponent } from './new-owner-interest.component';

describe('NewOwnerInterestComponent', () => {
  let component: NewOwnerInterestComponent;
  let fixture: ComponentFixture<NewOwnerInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOwnerInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOwnerInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
