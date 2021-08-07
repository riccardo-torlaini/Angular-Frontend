import { TestBed } from '@angular/core/testing';

import { AllRolesResolverService } from './all-roles-resolver.service';

describe('AllRolesResolverService', () => {
  let service: AllRolesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllRolesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
