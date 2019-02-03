import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragePlatesComponent } from './garage-plates.component';

describe('GaragePlatesComponent', () => {
  let component: GaragePlatesComponent;
  let fixture: ComponentFixture<GaragePlatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragePlatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragePlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
