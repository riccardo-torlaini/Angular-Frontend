import {Component, OnInit} from '@angular/core';
import {PartnersService} from "../../../services/partners/partners.service";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AppConstants} from "../../../../app.constants";

@Component({
    selector: 'app-company-opportunity-edit',
    templateUrl: './company-opportunity-edit.component.html',
    styleUrls: ['./company-opportunity-edit.component.css']
})
export class CompanyOpportunityEditComponent implements OnInit {

    companyOpportunity: any;
    loading: boolean;

    // Different companies for which internships are supported
    companies = AppConstants.companyOpportunityCompanies;

    // Categories that can be chosen
    categories = AppConstants.companyOpportunityCategories;

    constructor(titleService: Title,
                private partnersService: PartnersService,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Edit Company Opportunity");
    }

    ngOnInit(): void {
        this.companyOpportunity = this.activatedRoute.snapshot.data.companyOpportunity;
        this.loading = false;
    }

    submit() {
        this.loading = true;

        // Set the correct attributes
        this.companyOpportunity.imageUrl = this.companies[this.companyOpportunity.company];

        this.partnersService.editCompanyOpportunity(this.companyOpportunity).subscribe(companyOpportunity => {
            this.loading = false;

            // redirect to edited companyOpportunity
            window.location.href = "/partners/company_opportunities/" + companyOpportunity.id;
        });
    }
}
