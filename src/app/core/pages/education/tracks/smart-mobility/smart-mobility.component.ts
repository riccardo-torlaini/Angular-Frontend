import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-smart-mobility',
    templateUrl: './smart-mobility.component.html',
    styleUrls: ['./smart-mobility.component.css']
})
export class SmartMobilityComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Smart Mobility");
    }

    ngOnInit(): void {
    }

}
