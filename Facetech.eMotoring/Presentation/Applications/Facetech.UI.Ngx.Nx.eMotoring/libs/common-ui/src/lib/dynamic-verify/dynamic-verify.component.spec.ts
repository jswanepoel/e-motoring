import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicVerifyComponent } from './dynamic-verify.component';

describe('DynamicVerifyComponent', () => {
  let component: DynamicVerifyComponent;
  let fixture: ComponentFixture<DynamicVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
