import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-artificial-intelligence',
    templateUrl: './artificial-intelligence.component.html',
    styleUrls: ['./artificial-intelligence.component.css']
})
export class ArtificialIntelligenceComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Artificial Intelligence")
    }

    ngOnInit(): void {
    }

}
