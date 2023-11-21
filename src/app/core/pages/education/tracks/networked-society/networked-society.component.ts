import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-networked-society',
    templateUrl: './networked-society.component.html',
    styleUrls: ['./networked-society.component.css']
})
export class NetworkedSocietyComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Networked Society");
    }

    ngOnInit(): void {
    }

}
