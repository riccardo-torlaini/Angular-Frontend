import { TestBed } from '@angular/core/testing';

import { AllActivitiesManageResolverService } from './all-activities-manage-resolver.service';

describe('AllActivitiesManageResolverService', () => {
  let service: AllActivitiesManageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllActivitiesManageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
