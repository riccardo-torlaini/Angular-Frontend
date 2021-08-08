import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {RolesService} from "src/app/core/services/roles/roles.service";

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

    loading: boolean;

    role: any;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute,
                private rolesService: RolesService) {
        this.loading = true;

        titleService.setTitle("Role edit");
    }

    ngOnInit(): void {
        this.role = this.activatedRoute.snapshot.data.role;

        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.rolesService.edit(this.role).subscribe(role => {
            this.loading = false;

            // redirect to edited role
            window.location.href = "/manage/roles/view/" + role.id;
        });
    }

}
