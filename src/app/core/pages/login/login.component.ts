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

        const returnURL = localStorage.getItem('savedReturnURL');

        // If the user is logged in, redirect to the return URL when it was not the login page.
        if ((this.user.loggedIn) && (returnURL !== ""))
        {
            window.location.replace(returnURL);
            localStorage.setItem('savedReturnURL', "");
        }

        this.loading = false;
    }

    login(email, password) {

        const returnURL = document.referrer;
        const previousPage = returnURL.substring(returnURL.lastIndexOf('/') + 1);

        if ((previousPage === "") || (previousPage === "login")) {
            // If the previous page was void or the login page, save an empty string
            localStorage.setItem('savedReturnURL', "");
        }
        else {
            // Else, save the return URL
            localStorage.setItem('savedReturnURL', returnURL);
        }

        this.authService.login(email, password);
    }

    logout() {
        this.authService.logout();
    }
}
