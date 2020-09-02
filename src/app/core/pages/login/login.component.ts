import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    public loading: boolean;
    user: any;

    constructor(titleService: Title,
                private authService: AuthService,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Login");
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.currentUser;

        this.loading = false;
    }

    login(email, password) {
        this.authService.login(email, password);
    }

    logout() {
        this.authService.logout();
    }
}
