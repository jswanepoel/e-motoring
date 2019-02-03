import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTA6Component } from './mta6.component';

describe('MTA6Component', () => {
  let component: MTA6Component;
  let fixture: ComponentFixture<MTA6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTA6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTA6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
