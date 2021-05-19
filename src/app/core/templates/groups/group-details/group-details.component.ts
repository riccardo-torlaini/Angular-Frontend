import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

    loading: boolean;
    group: any;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;

        titleService.setTitle("Group Details");
    }

    priorityDict: {[key: string]: number} = {
        "Board representatitve": 5,
        Member: 4,
        Treasurer: 3,
        Secretary: 2,
        Chair: 1
    };

    ngOnInit(): void {
        const group = this.activatedRoute.snapshot.data.group;
        console.log(group);

        group.members.sort((a, b) =>
            (((this.priorityDict)[a.func] < this.priorityDict[b.func]) ?
                -1 : ((this.priorityDict[a.func] > this.priorityDict[b.func]) ? 1 : 0)));

        this.group = group;
    }

    arraymove(arr, fromIndex: number, toIndex: number) {
        const element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }

}
