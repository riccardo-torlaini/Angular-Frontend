import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-energy-transition',
    templateUrl: './energy-transition.component.html',
    styleUrls: ['./energy-transition.component.css']
})
export class EnergyTransitionComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Energy Transition");

    }

    ngOnInit(): void {
    }

}
