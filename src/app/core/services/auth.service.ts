import {Injectable} from '@angular/core';

import {catchError} from 'rxjs/operators';

import {CookieService} from "ngx-cookie-service";
import {WebRequestService} from "./web-request.service";
import {BehaviorSubject, of} from "rxjs";
import {UsersService} from "./users/users.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user: BehaviorSubject<any> = new BehaviorSubject<any>({loggedIn: false, groups: null});
    public loading: boolean;

    constructor(private cookieService: CookieService,
                private webService: WebRequestService,
                private usersService: UsersService) {
        this.loading = true;

        this.user.next({loggedIn: false, groups: null});

        this.getProfile();

        this.loading = false;
    }

    login(email, password) {
        return this.webService.post("api/auth/login/", {email, password})
            .pipe(catchError(err => {
                alert(err.error.data);
                return of();
            }))
            .subscribe(response => {
                this.getProfile().then(user => {
                    return;
                });

                window.location.reload();
            });
    }

    logout() {
        this.cookieService.delete("session", "/");
        this.user.next({loggedIn: false, groups: null});

        window.location.reload();
    }

    getProfile() {
        return new Promise(resolve => {
            this.webService.get("api/auth/").pipe(
                // @ts-ignore
                catchError(() => {
                    // not logged in
                    this.user.next({loggedIn: false, groups: null});
                })
            )
                .subscribe(result => {
                    this.usersService.get(result.body.id).subscribe(user => {

                        this.setUser(user, true);
                        resolve(user);
                    });
                });
        });
    }

    setUser(newUser, loggedIn) {
        newUser.loggedIn = loggedIn;
        this.user.next(newUser);
    }
}
