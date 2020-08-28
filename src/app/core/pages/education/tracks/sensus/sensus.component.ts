import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-sensus',
    templateUrl: './sensus.component.html',
    styleUrls: ['./sensus.component.css']
})
export class SensusComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("SensUs");
    }

    ngOnInit(): void {
    }

}
