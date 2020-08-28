import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-honors-bachelor',
    templateUrl: './honors-bachelor.component.html',
    styleUrls: ['./honors-bachelor.component.css']
})
export class HonorsBachelorComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Honors Bachelor");
    }

    ngOnInit(): void {
    }

}
