import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOwnerInterestComponent } from './current-owner-interest.component';

describe('CurrentOwnerInterestComponent', () => {
  let component: CurrentOwnerInterestComponent;
  let fixture: ComponentFixture<CurrentOwnerInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOwnerInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOwnerInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
