import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../services/activities/activities.service";
import {FilterPipe} from "../../pipes/filter.pipe";
import {SortPipe} from "../../pipes/sort.pipe";

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    user: any;
    loading: boolean;
    date = new Date().setDate((new Date()).getDate() - 1);
    archive: any[];
    users: any[];
    groups: any[];
    activities: any[];

    sortTypeActivities = 'id';
    sortReverseActivities = false;
    searchQueryActivities = "";
    sortCallbackActivities: any;

    sortTypeUsers = 'id';
    sortReverseUsers = false;
    searchQueryUsers = "";

    sortTypeGroups = 'id';
    sortReverseGroups = false;
    searchQueryGroups = "";

    private datepicker: { open: boolean };

    dateOptions = {
        formatYear: 'yy',
        maxDate: new Date().setFullYear(new Date().getFullYear() + 10), // maximum date for datepicker
        minDate: new Date(), // minimum date for datepicker
        startingDay: 1
    };

    constructor(private activatedRoute: ActivatedRoute,
                public authService: AuthService,
                private activitiesService: ActivitiesService,
                public filterPipe: FilterPipe,
                public sortPipe: SortPipe) {
        this.loading = true;

        // Variables for tracking search & sorting in activities tab
        this.sortTypeActivities = 'id';
        this.sortReverseActivities = false;

        // Variables for tracking search & sorting in users tab
        this.sortTypeUsers = 'id';
        this.sortReverseUsers = false;

        // Variables for tracking search & sorting in groups tab
        this.sortTypeGroups = 'id';
        this.sortReverseGroups = false;

        this.datepicker = {open: false};
    }

    ngOnInit(): void {
        this.authService.user.subscribe(user => {
            this.user = user;

            this.archive = this.activatedRoute.snapshot.data.allActivities;

            if (this.user.isAdmin) {
                this.users = this.activatedRoute.snapshot.data.allUsers;
                this.groups = this.activatedRoute.snapshot.data.allGroups;

                console.log(this.users);
                console.log(this.groups);
                console.log(this.archive);
            }

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

    sortActivities(type) {
        
    }

    activityCallback(activity, query) {
        return activity.Organizer.displayName.toLowerCase().includes(query.toLowerCase())
            || activity.name.toLowerCase().includes(query.toLowerCase());
    }

    userCallback(user, query) {
        return user.email.toLowerCase().includes(query.toLowerCase())
            || user.displayName.toLowerCase().includes(query.toLowerCase());
    }

    groupCallback(group, query) {
        return group.fullName.toLowerCase().includes(query.toLowerCase())
            || group.email.toLowerCase().includes(query.toLowerCase());
    }

    dateCallback(activity, query) {
        return activity.date >= new Date(query);
    }

    lexicographicSort(valueA: string, valueB: string) {
        return valueA.localeCompare(valueB);
    }

    booleanSort(valueA: boolean, valueB: boolean) {
        if (valueA === valueB) {
            return 0;
        } else if (valueA && !valueB) {
            return 1;
        } else {
            return -1;
        }
    }

    dateSort(valueA: Date, valueB: Date) {
        if (valueA.getTime() === valueB.getTime()) {
            return 0;
        } else if (valueA.getTime() >= valueB.getTime()) {
            return 1;
        } else {
            return -1;
        }
    }
}
