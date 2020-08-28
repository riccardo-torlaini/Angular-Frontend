import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-boards',
    templateUrl: './boards.component.html',
    styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Boards");
    }

    ngOnInit(): void {
    }
}
