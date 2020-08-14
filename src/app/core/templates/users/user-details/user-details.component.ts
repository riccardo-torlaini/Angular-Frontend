import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    user: any;
    groups: any;
    loading: boolean;

    constructor(private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
        this.loading = true;
    }

    ngOnInit(): void {
        if (this.activatedRoute.snapshot.routeConfig.path === "user/profile") {
            this.authService.user.subscribe(user => {
                this.user = user;
                this.groups = user.groups;
            });
        } else {
            this.user = this.activatedRoute.snapshot.data.user;
            this.groups = this.user.groups;
        }
        this.loading = false;
    }
}
