import { TestBed } from '@angular/core/testing';

import { AllCompanyOpportunitiesResolverService } from './all-company-opportunities-resolver.service';

describe('AllInternshipsResolverService', () => {
  let service: AllCompanyOpportunitiesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCompanyOpportunitiesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
