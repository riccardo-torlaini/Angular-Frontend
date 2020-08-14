import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

    loading: boolean;
    group: any;

    constructor(private activatedRoute: ActivatedRoute) {
        this.loading = true;
    }

    ngOnInit(): void {
        const group = this.activatedRoute.snapshot.data.group;

        // Sorting group on 1. chair, 2. Secretary, 3. Treasurer, 4. Members, 5. Board representative
        for (let i = 0; i < group.members.length; i++) {
            if (group.members[i].user_group.func === "Board representatitve") {
                this.arraymove(group.members, i, group.members.length - 1);
            }
        }
        for (let i = 0; i < group.members.length; i++) {
            if (group.members[i].user_group.func === "Treasurer") {
                this.arraymove(group.members, i, 0);
            }
        }
        for (let i = 0; i < group.members.length; i++) {
            if (group.members[i].user_group.func === "Secretary") {
                this.arraymove(group.members, i, 0);
            }
        }
        for (let i = 0; i < group.members.length; i++) {
            if (group.members[i].user_group.func === "Chair") {
                this.arraymove(group.members, i, 0);
            }
        }

        this.group = group;
    }

    arraymove(arr, fromIndex: number, toIndex: number) {
        const element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }

}
