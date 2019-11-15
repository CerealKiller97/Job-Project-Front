import { TestBed } from '@angular/core/testing';

import { ModeratorEmailsResolverService } from './moderator-emails-resolver.service';

describe('ModeratorEmailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeratorEmailsResolverService = TestBed.get(ModeratorEmailsResolverService);
    expect(service).toBeTruthy();
  });
});
