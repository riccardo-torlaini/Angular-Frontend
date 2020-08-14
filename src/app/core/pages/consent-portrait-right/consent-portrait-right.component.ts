import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "../../services/notifications/notifications.service";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-consent-portrait-right',
    templateUrl: './consent-portrait-right.component.html',
    styleUrls: ['./consent-portrait-right.component.css']
})
export class ConsentPortraitRightComponent implements OnInit {

    private user;

    constructor(private notificationsService: NotificationsService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.user.subscribe(user => {
            this.user = user;
        });
    }

    submit() {
        this.notificationsService.portraitRight(this.user.id, true);
    }

}
