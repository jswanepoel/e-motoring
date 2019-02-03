import { TestBed } from '@angular/core/testing';

import { ApplicantRequestService } from './applicant-request.service';

describe('ApplicantRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantRequestService = TestBed.get(ApplicantRequestService);
    expect(service).toBeTruthy();
  });
});
