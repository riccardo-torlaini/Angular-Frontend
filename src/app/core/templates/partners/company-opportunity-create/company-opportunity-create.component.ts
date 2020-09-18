import {Component, OnInit} from '@angular/core';
import {PartnersService} from "../../../services/partners/partners.service";
import {Title} from "@angular/platform-browser";
import {AppConstants} from "../../../../app.constants";

@Component({
    selector: 'app-company-opportunity-create',
    templateUrl: './company-opportunity-create.component.html',
    styleUrls: ['./company-opportunity-create.component.css']
})
export class CompanyOpportunityCreateComponent implements OnInit {

    loading: boolean;

    // Different companies for which company opportunities are supported
    companies = new Map([
        ["Optiver", "./assets/img/partners/optiver.png"],
    ]);

    // Categories that can be chosen
    categories = AppConstants.companyOpportunityCategories;

    title: string;
    company: string;
    description: string;
    email: string;
    link: string;
    educationLevel: string;
    category: string;

    constructor(titleService: Title,
                private partnersService: PartnersService) {
        this.loading = true;

        titleService.setTitle("Create Company Opportunity");
    }

    ngOnInit(): void {
        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.partnersService.createCompanyOpportunity({
            title: this.title,
            companyName: this.company,
            description: this.description,
            imageUrl: this.companies.get(this.company),
            contactEmail: this.email,
            link: this.link,
            educationLevel: this.educationLevel,
            category: this.category
        }).subscribe(companyOpportunity => {
            this.loading = false;

            // redirect to created companyOpportunity
            window.location.href = "/partners/company_opportunities/" + companyOpportunity.id;
        });
    }

}
