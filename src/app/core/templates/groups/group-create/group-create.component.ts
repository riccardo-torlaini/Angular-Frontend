import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../../services/groups/groups.service";

@Component({
    selector: 'app-group-create',
    templateUrl: './group-create.component.html',
    styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

    loading: boolean;
    name;
    fullName;
    description;
    email;
    canOrganize;
    type;
    differentType;

    constructor(private groupsService: GroupsService) {
        this.loading = true;
    }

    ngOnInit(): void {
        this.loading = false;
    }

    submit() {
        this.loading = true;

        this.groupsService.create({
            displayName: this.name,
            fullName: this.fullName,
            description: this.description,
            email: this.email,
            canOrganize: this.canOrganize,
            type: this.type
        }).subscribe(group => {
            this.loading = false;

            // redirect to created group
            window.location.href = "/group/" + group.id;
        });
    }

}
