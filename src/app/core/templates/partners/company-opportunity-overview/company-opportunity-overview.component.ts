import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AppConstants} from "../../../../app.constants";

@Component({
    selector: 'app-company-opportunity-overview',
    templateUrl: './company-opportunity-overview.component.html',
    styleUrls: ['./company-opportunity-overview.component.css']
})
export class CompanyOpportunityOverviewComponent implements OnInit {

    loading: boolean;
    companyOpportunities: any[];
    user: any;
    isUserInAcquisition: boolean;

    categories = AppConstants.companyOpportunityCategories;

    nonEmptyCategories = ["all"];
    opportunityQuery = "all";

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Company Opportunities Overview");
    }

    ngOnInit(): void {
        this.companyOpportunities = this.activatedRoute.snapshot.data.allCompanyOpportunity;
        this.user = this.activatedRoute.snapshot.data.currentUser;

        if (this.user.loggedIn) {
            for (const group of this.user.groups) {
                if (group.email === "acquisition@hsaconfluente.nl") {
                    this.isUserInAcquisition = true;
                }
            }
        }

        this.categories = ['all'].concat(this.categories);

        this.loading = false;
    }

    toggleQuery(query) {
        this.opportunityQuery = query;
    }

    categoryCallback(opportunity, query) {
        return opportunity.category === query || query === "all";
    }

}
