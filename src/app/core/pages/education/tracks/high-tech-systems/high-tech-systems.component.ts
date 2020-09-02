import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-high-tech-systems',
    templateUrl: './high-tech-systems.component.html',
    styleUrls: ['./high-tech-systems.component.css']
})
export class HighTechSystemsComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("High Tech Systems");
    }

    ngOnInit(): void {
    }

}
