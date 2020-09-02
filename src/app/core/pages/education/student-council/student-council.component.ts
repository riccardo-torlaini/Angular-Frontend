import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-student-council',
    templateUrl: './student-council.component.html',
    styleUrls: ['./student-council.component.css']
})
export class StudentCouncilComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Student Council");
    }

    ngOnInit(): void {
    }

}
