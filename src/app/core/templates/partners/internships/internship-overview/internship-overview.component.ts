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

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Internship Overview");
    }

    ngOnInit(): void {
        this.internships = this.activatedRoute.snapshot.data.allInternships;
    }

}
