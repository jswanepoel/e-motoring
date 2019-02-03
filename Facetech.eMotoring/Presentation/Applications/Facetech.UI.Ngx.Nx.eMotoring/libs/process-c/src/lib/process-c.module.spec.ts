import { async, TestBed } from '@angular/core/testing';
import { ProcessCModule } from './process-c.module';

describe('ProcessCModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessCModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcessCModule).toBeDefined();
  });
});
