import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from "../../../services/activities/activities.service";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute} from "@angular/router";

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

    constructor(private activatedRoute: ActivatedRoute,
                public authService: AuthService) {
        this.loading = true;
    }

    ngOnInit(): void {
        this.authService.user.subscribe(user => {
            this.user = user;
        });

        this.activities = this.activatedRoute.snapshot.data.activities;

        for (const activity of this.activities) {
            activity.subscribed = false;
            for (const participant of activity.participants) {
                if (participant.id === this.user.id) {
                    activity.subscribed = true;
                    break;
                }
            }
        }

        this.loading = false;
    }

}
