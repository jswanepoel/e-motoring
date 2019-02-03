import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavigationComponent } from './app-side-navigation.component';

describe('AppSideNavigationComponent', () => {
  let component: AppSideNavigationComponent;
  let fixture: ComponentFixture<AppSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
