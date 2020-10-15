import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOpportunityEditComponent } from './company-opportunity-edit.component';

describe('CompanyOpportunityEditComponent', () => {
  let component: CompanyOpportunityEditComponent;
  let fixture: ComponentFixture<CompanyOpportunityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOpportunityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOpportunityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
