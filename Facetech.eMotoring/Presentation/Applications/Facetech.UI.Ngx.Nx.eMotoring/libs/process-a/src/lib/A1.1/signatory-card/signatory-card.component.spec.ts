import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatoryCardComponent } from './signatory-card.component';

describe('SignatoryCardComponent', () => {
  let component: SignatoryCardComponent;
  let fixture: ComponentFixture<SignatoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
