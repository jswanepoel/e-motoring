import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBlockComponent } from './ui-block.component';

describe('UiBlockComponent', () => {
  let component: UiBlockComponent;
  let fixture: ComponentFixture<UiBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
