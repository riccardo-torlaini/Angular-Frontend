import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users/users.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

    loading;
    user;
    currentUser;
    passwordNew;
    passwordNew2;
    password;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute,
                private usersService: UsersService) {
        this.loading = true;

        titleService.setTitle("Change Password");
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.user;
        this.currentUser = this.activatedRoute.snapshot.data.currentUser;
        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.user.password = this.password;
        this.user.passwordNew = this.passwordNew;
        this.user.passwordNew2 = this.passwordNew2;

        this.usersService.changePassword(this.user).subscribe((_) => {
            this.loading = false;

            // redirect to profile
            window.location.href = "/user/profile";
        });
    }
}
