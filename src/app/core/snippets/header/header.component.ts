import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public loading: boolean;
    user: any;

    constructor(public authService: AuthService) {
        this.loading = true;
        this.authService.user.subscribe(user => {
            this.user = user;
        });
    }

    ngOnInit(): void {
        this.loading = false;
    }

    logout() {
        this.authService.logout();
    }
}
