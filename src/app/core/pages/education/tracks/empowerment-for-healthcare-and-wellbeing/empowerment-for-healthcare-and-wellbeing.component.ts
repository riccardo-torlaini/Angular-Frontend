import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-empowerment-for-healthcare-and-wellbeing',
    templateUrl: './empowerment-for-healthcare-and-wellbeing.component.html',
    styleUrls: ['./empowerment-for-healthcare-and-wellbeing.component.css']
})
export class EmpowermentForHealthcareAndWellbeingComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Empowerment for Healthcare and Wellbeing");
    }

    ngOnInit(): void {
    }

}
