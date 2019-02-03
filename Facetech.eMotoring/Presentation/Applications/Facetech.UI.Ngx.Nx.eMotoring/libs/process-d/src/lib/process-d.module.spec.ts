import { async, TestBed } from '@angular/core/testing';
import { ProcessDModule } from './process-d.module';

describe('ProcessDModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessDModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcessDModule).toBeDefined();
  });
});
