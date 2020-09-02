import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-internship-overview',
    templateUrl: './internship-overview.component.html',
    styleUrls: ['./internship-overview.component.css']
})
export class InternshipOverviewComponent implements OnInit {

    loading: boolean;
    internships: any[];
    user: any;
    isUserInAcquisition: boolean;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Internship Overview");
    }

    ngOnInit(): void {
        this.internships = this.activatedRoute.snapshot.data.allInternships;
        this.user = this.activatedRoute.snapshot.data.currentUser;

        for (const group of this.user.groups) {
            if (group.email === "acquisition@hsaconfluente.nl") {
                this.isUserInAcquisition = true;
            }
        }

        this.loading = false;
    }

}
