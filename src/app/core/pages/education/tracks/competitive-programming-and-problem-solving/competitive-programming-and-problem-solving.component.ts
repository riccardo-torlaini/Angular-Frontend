import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-competitive-programming-and-problem-solving',
    templateUrl: './competitive-programming-and-problem-solving.component.html',
    styleUrls: ['./competitive-programming-and-problem-solving.component.css']
})
export class CompetitiveProgrammingAndProblemSolvingComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Competitive Programming and Problem Solving");
    }

    ngOnInit(): void {
    }

}
