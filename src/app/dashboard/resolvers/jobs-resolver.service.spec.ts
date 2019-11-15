import { TestBed } from '@angular/core/testing';

import { JobsResolverService } from './jobs-resolver.service';

describe('JobsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsResolverService = TestBed.get(JobsResolverService);
    expect(service).toBeTruthy();
  });
});
