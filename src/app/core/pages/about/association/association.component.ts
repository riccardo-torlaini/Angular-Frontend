import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-association',
    templateUrl: './association.component.html',
    styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Association");
    }

    ngOnInit(): void {
    }
}
