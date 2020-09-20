import { TestBed } from '@angular/core/testing';

import { AllCompanyOpportunitiesByCategoryService } from './all-company-opportunities-by-category.service';

describe('AllCompanyOpportunitiesByCategoryService', () => {
  let service: AllCompanyOpportunitiesByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCompanyOpportunitiesByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
