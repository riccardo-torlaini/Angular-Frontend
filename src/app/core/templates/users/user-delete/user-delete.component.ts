import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users/users.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-user-delete',
    templateUrl: './user-delete.component.html',
    styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

    user;
    loading: boolean;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute,
                private usersService: UsersService) {
        this.loading = true;

        titleService.setTitle("Delete User");
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.user;
        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.usersService.delete(this.user.id).subscribe((_) => {
            this.loading = false;

            // redirect to '/manage'
            window.location.href = "/manage";
        });
    }

}
