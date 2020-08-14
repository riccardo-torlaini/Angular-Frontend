import { TestBed } from '@angular/core/testing';

import { AllGroupsResolverService } from './all-groups-resolver.service';

describe('AllGroupsResolverService', () => {
  let service: AllGroupsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllGroupsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
