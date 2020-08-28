import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-sponsors',
    templateUrl: './sponsors.component.html',
    styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Sponsors");
    }

    ngOnInit(): void {
    }

}
