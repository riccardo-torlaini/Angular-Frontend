import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-role-details',
    templateUrl: './role-details.component.html',
    styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

    loading: boolean;

    role: any;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Role details");
    }

    ngOnInit(): void {
        this.role = this.activatedRoute.snapshot.data.role;
    }

    noChange() {
        return false;
    }

}
