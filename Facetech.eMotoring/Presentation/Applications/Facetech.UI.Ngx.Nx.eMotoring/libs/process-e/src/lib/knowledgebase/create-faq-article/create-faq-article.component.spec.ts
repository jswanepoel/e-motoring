import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFaqArticleComponent } from './create-faq-article.component';

describe('CreateFaqArticleComponent', () => {
  let component: CreateFaqArticleComponent;
  let fixture: ComponentFixture<CreateFaqArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFaqArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFaqArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
