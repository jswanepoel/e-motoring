import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPublicDomainComponent } from './search-public-domain.component';

describe('SearchPublicDomainComponent', () => {
  let component: SearchPublicDomainComponent;
  let fixture: ComponentFixture<SearchPublicDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPublicDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPublicDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
