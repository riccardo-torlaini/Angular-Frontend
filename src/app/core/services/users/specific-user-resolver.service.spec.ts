import { TestBed } from '@angular/core/testing';

import { SpecificUserResolverService } from './specific-user-resolver.service';

describe('SpecificUserResolverService', () => {
  let service: SpecificUserResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificUserResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
