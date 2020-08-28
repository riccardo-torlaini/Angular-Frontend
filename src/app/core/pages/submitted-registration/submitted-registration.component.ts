import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-submitted-registration',
    templateUrl: './submitted-registration.component.html',
    styleUrls: ['./submitted-registration.component.css']
})
export class SubmittedRegistrationComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Registration Submitted!");
    }

    ngOnInit(): void {
    }

}
