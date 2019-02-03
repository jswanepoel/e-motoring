import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCommentsComponent } from './transaction-comments.component';

describe('TransactionCommentsComponent', () => {
  let component: TransactionCommentsComponent;
  let fixture: ComponentFixture<TransactionCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
