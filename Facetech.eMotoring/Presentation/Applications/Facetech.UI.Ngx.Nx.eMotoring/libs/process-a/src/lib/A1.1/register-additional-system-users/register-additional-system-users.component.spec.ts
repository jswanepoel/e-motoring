import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdditionalSystemUsersComponent } from './register-additional-system-users.component';

describe('RegisterAdditionalSystemUsersComponent', () => {
  let component: RegisterAdditionalSystemUsersComponent;
  let fixture: ComponentFixture<RegisterAdditionalSystemUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdditionalSystemUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdditionalSystemUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
