import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBehalfOfOwnerComponent } from './on-behalf-of-owner.component';

describe('OnBehalfOfOwnerComponent', () => {
  let component: OnBehalfOfOwnerComponent;
  let fixture: ComponentFixture<OnBehalfOfOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBehalfOfOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBehalfOfOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
