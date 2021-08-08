import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {RolesService} from "src/app/core/services/roles/roles.service";

@Component({
    selector: 'app-role-create',
    templateUrl: './role-create.component.html',
    styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

    loading: boolean;

    name: string;

    ACTIVITY_VIEW_PUBLISHED: boolean;
    ACTIVITY_VIEW_ALL_UNPUBLISHED: boolean;
    ACTIVITY_MANAGE: boolean;
    GROUP_VIEW: boolean;
    GROUP_MANAGE: boolean;
    GROUP_ORGANIZE_WITH_ALL: boolean;
    USER_CREATE: boolean;
    USER_VIEW_ALL: boolean;
    USER_MANAGE: boolean;
    CHANGE_ALL_PASSWORDS: boolean;
    ROLE_VIEW: boolean;
    ROLE_MANAGE: boolean;
    PARTNER_VIEW: boolean;
    PARTNER_MANAGE: boolean;
    PAGE_VIEW: boolean;
    PAGE_MANAGE: boolean;

    constructor(titleService: Title,
                private rolesService: RolesService) {
        this.loading = true;

        titleService.setTitle("Create role");
    }

    ngOnInit(): void {
        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.rolesService.create({
            name: this.name,
            ACTIVITY_VIEW_PUBLISHED: this.ACTIVITY_VIEW_PUBLISHED,
            ACTIVITY_VIEW_ALL_UNPUBLISHED: this.ACTIVITY_VIEW_ALL_UNPUBLISHED,
            ACTIVITY_MANAGE: this.ACTIVITY_MANAGE,
            GROUP_VIEW: this.GROUP_VIEW,
            GROUP_MANAGE: this.GROUP_MANAGE,
            GROUP_ORGANIZE_WITH_ALL: this.GROUP_ORGANIZE_WITH_ALL,
            USER_CREATE: this.USER_CREATE,
            USER_VIEW_ALL: this.USER_VIEW_ALL,
            USER_MANAGE: this.USER_MANAGE,
            CHANGE_ALL_PASSWORDS: this.CHANGE_ALL_PASSWORDS,
            ROLE_VIEW: this.ROLE_VIEW,
            ROLE_MANAGE: this.ROLE_MANAGE,
            PARTNER_VIEW: this.PARTNER_VIEW,
            PARTNER_MANAGE: this.PARTNER_MANAGE,
            PAGE_VIEW: this.PAGE_VIEW,
            PAGE_MANAGE: this.PAGE_MANAGE
        }).subscribe(role => {
            this.loading = false;

            // redirect to created role
            window.location.href = "/manage/roles/view/" + role.id;
        });
    }

}
