import { TestBed } from '@angular/core/testing';

import { SpecificActivityResolverService } from './specific-activity-resolver.service';

describe('SpecificActivityResolverService', () => {
  let service: SpecificActivityResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificActivityResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
