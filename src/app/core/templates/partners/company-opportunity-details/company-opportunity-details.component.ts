import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-company-opportunity-details',
    templateUrl: './company-opportunity-details.component.html',
    styleUrls: ['./company-opportunity-details.component.css']
})
export class CompanyOpportunityDetailsComponent implements OnInit {

    loading: boolean;
    companyOpportunity: any;
    user: any;
    isUserInAcquisition = false;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute,
                private sanitizer: DomSanitizer) {
        this.loading = true;

        titleService.setTitle("Company Opportunity Details");
    }

    ngOnInit(): void {
        this.companyOpportunity = this.activatedRoute.snapshot.data.companyOpportunity;

        this.companyOpportunity.link = this.sanitizer.bypassSecurityTrustUrl(this.companyOpportunity.link);

        this.user = this.activatedRoute.snapshot.data.currentUser;

        if (!this.user.loggedIn) {
            return;
        }

        for (const group of this.user.groups) {
            if (group.email === "acquisition@hsaconfluente.nl") {
                this.isUserInAcquisition = true;
            }
        }
    }
}
