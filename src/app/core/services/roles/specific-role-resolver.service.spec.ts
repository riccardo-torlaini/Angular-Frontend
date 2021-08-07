import { TestBed } from '@angular/core/testing';

import { SpecificRoleResolverService } from './specific-role-resolver.service';

describe('SpecificRoleResolverService', () => {
  let service: SpecificRoleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificRoleResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
