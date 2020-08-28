import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "../../services/notifications/notifications.service";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-consent-portrait-right',
    templateUrl: './consent-portrait-right.component.html',
    styleUrls: ['./consent-portrait-right.component.css']
})
export class ConsentPortraitRightComponent implements OnInit {

    private user;

    constructor(titleService: Title,
                private notificationsService: NotificationsService,
                private activatedRoute: ActivatedRoute) {
        titleService.setTitle("Portrait Right");
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.currentUser;
    }

    submit() {
        this.notificationsService.portraitRight(this.user.id, true).subscribe(user => {
            // redirect to home screen
            window.location.href = "/home";
        });
    }

}
