import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyOpportunityCreateComponent} from './company-opportunity-create.component';

describe('CompanyOpportunityCreateComponent', () => {
    let component: CompanyOpportunityCreateComponent;
    let fixture: ComponentFixture<CompanyOpportunityCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompanyOpportunityCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyOpportunityCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
