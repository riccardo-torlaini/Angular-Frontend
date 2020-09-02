import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-completed-registration',
    templateUrl: './completed-registration.component.html',
    styleUrls: ['./completed-registration.component.css']
})
export class CompletedRegistrationComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Registration Completed!");
    }

    ngOnInit(): void {
    }

}
