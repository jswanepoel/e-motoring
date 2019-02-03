import { async, TestBed } from '@angular/core/testing';
import { ProcessBModule } from './process-b.module';

describe('ProcessBModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessBModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcessBModule).toBeDefined();
  });
});
