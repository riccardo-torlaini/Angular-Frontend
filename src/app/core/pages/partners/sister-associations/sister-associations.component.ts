import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-sister-associations',
    templateUrl: './sister-associations.component.html',
    styleUrls: ['./sister-associations.component.css']
})
export class SisterAssociationsComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Sister Associations");
    }

    ngOnInit(): void {
    }

}
