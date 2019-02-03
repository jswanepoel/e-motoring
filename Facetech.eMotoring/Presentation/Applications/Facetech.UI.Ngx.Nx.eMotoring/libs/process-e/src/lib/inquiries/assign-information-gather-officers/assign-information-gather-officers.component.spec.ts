import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInformationGatherOfficersComponent } from './assign-information-gather-officers.component';

describe('AssignInformationGatherOfficersComponent', () => {
  let component: AssignInformationGatherOfficersComponent;
  let fixture: ComponentFixture<AssignInformationGatherOfficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInformationGatherOfficersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInformationGatherOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
