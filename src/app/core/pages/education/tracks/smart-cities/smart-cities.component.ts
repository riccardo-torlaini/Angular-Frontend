import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-smart-cities',
    templateUrl: './smart-cities.component.html',
    styleUrls: ['./smart-cities.component.css']
})
export class SmartCitiesComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Smart Cities");
    }

    ngOnInit(): void {
    }

}
