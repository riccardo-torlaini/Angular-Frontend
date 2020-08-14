import { TestBed } from '@angular/core/testing';

import { AllUsersResolverService } from './all-users-resolver.service';

describe('AllUsersResolverService', () => {
  let service: AllUsersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUsersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
