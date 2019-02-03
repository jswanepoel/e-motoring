import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyNewOwnerComponent } from './identify-new-owner.component';

describe('IdentifyNewOwnerComponent', () => {
  let component: IdentifyNewOwnerComponent;
  let fixture: ComponentFixture<IdentifyNewOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyNewOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyNewOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
