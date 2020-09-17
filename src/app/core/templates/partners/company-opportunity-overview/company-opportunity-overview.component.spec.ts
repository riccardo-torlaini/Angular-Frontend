import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOpportunityOverviewComponent } from './company-opportunity-overview.component';

describe('CompanyOpportunityOverviewComponent', () => {
  let component: CompanyOpportunityOverviewComponent;
  let fixture: ComponentFixture<CompanyOpportunityOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOpportunityOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOpportunityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
