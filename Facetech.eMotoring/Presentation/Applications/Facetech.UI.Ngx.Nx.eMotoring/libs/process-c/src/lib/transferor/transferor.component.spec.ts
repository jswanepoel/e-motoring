import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferorComponent } from './transferor.component';

describe('TransferorComponent', () => {
  let component: TransferorComponent;
  let fixture: ComponentFixture<TransferorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
