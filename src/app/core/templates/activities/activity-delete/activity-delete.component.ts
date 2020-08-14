import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../../services/activities/activities.service";

@Component({
    selector: 'app-activity-delete',
    templateUrl: './activity-delete.component.html',
    styleUrls: ['./activity-delete.component.css']
})
export class ActivityDeleteComponent implements OnInit {

    loading: boolean;
    activity;

    constructor(private activatedRoute: ActivatedRoute,
                private activitiesService: ActivitiesService) {
        this.loading = true;
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
