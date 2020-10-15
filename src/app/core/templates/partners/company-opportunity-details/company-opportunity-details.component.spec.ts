import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOpportunityDetailsComponent } from './company-opportunity-details.component';

describe('CompanyOpportunityDetailsComponent', () => {
  let component: CompanyOpportunityDetailsComponent;
  let fixture: ComponentFixture<CompanyOpportunityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOpportunityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOpportunityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
