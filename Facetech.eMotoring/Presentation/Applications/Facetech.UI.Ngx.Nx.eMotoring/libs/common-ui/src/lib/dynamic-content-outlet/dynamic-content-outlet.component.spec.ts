import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentOutletComponent } from './dynamic-content-outlet.component';

describe('DynamicContentOutletComponent', () => {
  let component: DynamicContentOutletComponent;
  let fixture: ComponentFixture<DynamicContentOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
