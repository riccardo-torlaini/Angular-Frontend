import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-honors-academy',
    templateUrl: './honors-academy.component.html',
    styleUrls: ['./honors-academy.component.css']
})
export class HonorsAcademyComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Honors Academy");
    }

    ngOnInit(): void {
    }

}
