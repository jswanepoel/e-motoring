import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesOfInterestComponent } from './entities-of-interest.component';

describe('EntitiesOfInterestComponent', () => {
  let component: EntitiesOfInterestComponent;
  let fixture: ComponentFixture<EntitiesOfInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesOfInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
