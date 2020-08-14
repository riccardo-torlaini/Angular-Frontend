import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../services/activities/activities.service";

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    user: any;
    loading: boolean;
    f: { date: Date };
    private archive: any[];
    users: any[];
    groups: any[];
    activities: any[];

    sortTypeActivities: string;
    sortReverseActivities: boolean;
    searchQueryActivities: string;

    sortTypeUsers: string;
    sortReverseUsers: boolean;
    searchQueryUsers: string;
    sortTypeGroups: string;
    sortReverseGroups: boolean;
    searchQueryGroups: string;

    private datepicker: { open: boolean };

    dateOptions = {
        formatYear: 'yy',
        maxDate: new Date().setFullYear(new Date().getFullYear() + 10), // maximum date for datepicker
        minDate: new Date(), // minimum date for datepicker
        startingDay: 1
    };

    constructor(private activatedRoute: ActivatedRoute,
                public authService: AuthService,
                private activitiesService: ActivitiesService) {
        this.loading = true;
        this.f = {
            date: new Date()
        };

        // Variables for tracking search & sorting in activities tab
        this.sortTypeActivities = 'id';
        this.sortReverseActivities = false;
        this.searchQueryActivities = '';

        // Variables for tracking search & sorting in users tab
        this.sortTypeUsers = 'id';
        this.sortReverseUsers = false;
        this.searchQueryUsers = '';

        // Variables for tracking search & sorting in groups tab
        this.sortTypeGroups = 'id';
        this.sortReverseGroups = false;
        this.searchQueryGroups = '';

        this.datepicker = {open: false};
    }

    ngOnInit(): void {
        this.authService.user.subscribe(user => {
            this.user = user;

            this.archive = this.activatedRoute.snapshot.data.allActivities;

            if (this.user.isAdmin) {
                this.users = this.activatedRoute.snapshot.data.allUsers;
                this.groups = this.activatedRoute.snapshot.data.allGroups;
            }

            this.filter();

            this.loading = false;
        });
    }

    // Allow toggling the 'published' attribute of activities
    togglePublishedActivity(activityToBeToggled) {
        activityToBeToggled.published = !activityToBeToggled.published;
        activityToBeToggled.organizer = activityToBeToggled.Organizer.displayName;
        this.activitiesService.edit(activityToBeToggled, true, null).subscribe(res => {
            return;
        });
    }

    // $scope.$watch("f.date", function (newDate) {
    //     $scope.filter();
    // });

    filter() {
        const date = this.f.date;
        date.setDate(date.getDate() - 1);
        this.activities = [];
        for (const activity of this.archive) {
            if (activity.date >= date) {
                this.activities.push(activity);
            }
        }
    }

    // Ugly repeated code
    sortActivities(type) {
        if (this.sortTypeActivities === type) {
            this.sortReverseActivities = !this.sortReverseActivities;
        } else {
            this.sortReverseActivities = false;
        }
        this.sortTypeActivities = type;
    }

    sortUsers(type) {
        if (this.sortTypeUsers === type) {
            this.sortReverseUsers = !this.sortReverseUsers;
        } else {
            this.sortReverseUsers = false;
        }
        this.sortTypeUsers = type;
    }

    sortGroups(type) {
        if (this.sortTypeGroups === type) {
            this.sortReverseGroups = !this.sortReverseGroups;
        } else {
            this.sortReverseGroups = false;
        }
        this.sortTypeGroups = type;
    }

    // function for using datepicker in form for creating activities
    openDatePicker() {
        this.datepicker.open = true;
    }
}
