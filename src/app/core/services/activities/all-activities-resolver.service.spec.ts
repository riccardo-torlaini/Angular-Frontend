import { TestBed } from '@angular/core/testing';

import { AllActivitiesResolverService } from './all-activities-resolver.service';

describe('AllActivitiesResolverService', () => {
  let service: AllActivitiesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllActivitiesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
