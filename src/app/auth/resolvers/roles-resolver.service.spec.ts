import { TestBed } from '@angular/core/testing';

import { RolesResolverService } from './roles-resolver.service';

describe('RolesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolesResolverService = TestBed.get(RolesResolverService);
    expect(service).toBeTruthy();
  });
});
