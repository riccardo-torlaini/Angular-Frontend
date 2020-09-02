import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-hr',
    templateUrl: './hr.component.html',
    styleUrls: ['./hr.component.css']
})
export class HRComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Honors Room");
    }

    ngOnInit(): void {
    }

}
