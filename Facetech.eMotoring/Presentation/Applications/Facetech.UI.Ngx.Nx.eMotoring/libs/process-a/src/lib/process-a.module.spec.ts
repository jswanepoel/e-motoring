import { async, TestBed } from '@angular/core/testing';
import { ProcessAModule } from './process-a.module';

describe('ProcessAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcessAModule).toBeDefined();
  });
});
