import { TestBed } from '@angular/core/testing';

import { SpecificGroupResolverService } from './specific-group-resolver.service';

describe('SpecificGroupResolverService', () => {
  let service: SpecificGroupResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificGroupResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
