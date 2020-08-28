import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-honors-master',
    templateUrl: './honors-master.component.html',
    styleUrls: ['./honors-master.component.css']
})
export class HonorsMasterComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Honors Master");
    }

    ngOnInit(): void {
    }

}
