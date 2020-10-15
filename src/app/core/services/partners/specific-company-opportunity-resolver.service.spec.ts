import { TestBed } from '@angular/core/testing';

import { SpecificCompanyOpportunityResolverService } from './specific-company-opportunity-resolver.service';

describe('SpecificInternshipResolverService', () => {
  let service: SpecificCompanyOpportunityResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificCompanyOpportunityResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
