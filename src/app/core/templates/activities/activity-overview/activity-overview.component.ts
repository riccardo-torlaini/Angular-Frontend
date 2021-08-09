import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from "../../../services/activities/activities.service";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-activity-overview',
    templateUrl: './activity-overview.component.html',
    providers: [ActivitiesService],
    styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {

    loading: boolean;
    activities;
    user;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Activity Overview");
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.currentUser;

        this.activities = this.activatedRoute.snapshot.data.activities;

        for (const activity of this.activities) {
            activity.subscribed = false;
            if (activity.canSubscribe) {
                for (const participant of activity.participants) {
                    if (participant.user.id === this.user.id) {
                        activity.subscribed = true;
                        break;
                    }
                }
            }
        }

        this.loading = false;
    }

}
