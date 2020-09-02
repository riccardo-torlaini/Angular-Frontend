import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../../services/activities/activities.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-activity-delete',
    templateUrl: './activity-delete.component.html',
    styleUrls: ['./activity-delete.component.css']
})
export class ActivityDeleteComponent implements OnInit {

    loading: boolean;
    activity;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute,
                private activitiesService: ActivitiesService) {
        this.loading = true;

        titleService.setTitle("Delete Activity");
    }

    ngOnInit(): void {
        this.activity = this.activatedRoute.snapshot.data.activity;
        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.activitiesService.delete(this.activity.id).subscribe((_) => {
            this.loading = false;

            // redirect to '/manage'
            window.location.href = "/manage";
        });
    }
}
