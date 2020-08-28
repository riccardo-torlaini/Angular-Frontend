import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-alumni',
    templateUrl: './alumni.component.html',
    styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Alumni");
    }

    ngOnInit(): void {
    }
}
