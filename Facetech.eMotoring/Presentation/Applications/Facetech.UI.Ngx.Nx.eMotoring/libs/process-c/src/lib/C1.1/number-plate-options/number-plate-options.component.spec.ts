import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPlateOptionsComponent } from './number-plate-options.component';

describe('NumberPlateOptionsComponent', () => {
  let component: NumberPlateOptionsComponent;
  let fixture: ComponentFixture<NumberPlateOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPlateOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPlateOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
