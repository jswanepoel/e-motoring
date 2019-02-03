import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeeSelectTableComponent } from './fee-select-table.component';

describe('FeeSelectTableComponent', () => {
  let component: FeeSelectTableComponent;
  let fixture: ComponentFixture<FeeSelectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeeSelectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
