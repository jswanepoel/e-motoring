import { async, TestBed } from '@angular/core/testing';
import { ProcessEModule } from './process-e.module';

describe('ProcessEModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessEModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcessEModule).toBeDefined();
  });
});
