import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroupsService} from "../../../services/groups/groups.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-group-edit',
    templateUrl: './group-edit.component.html',
    styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

    // Different roles in a committee
    groupRoles = ["Member", "Chair", "Secretary", "Treasurer", "Board representative"];

    usersInGroup = [];

    usersNotInGroup = [];

    group;
    private allUsers;
    searchQueryUsersNotInGroup = "";
    searchQueryUsersInGroup = "";

    loading: boolean;

    constructor(titleService: Title,
                private activatedRoute: ActivatedRoute,
                private groupsService: GroupsService) {
        this.loading = true;

        titleService.setTitle("Edit Group");
    }

    ngOnInit(): void {
        this.group = this.activatedRoute.snapshot.data.group;

        console.log(this.group);

        const idsInGroup = [];
        for (const member of this.group.members) {
            this.usersInGroup.push({
                name: member.user.displayName,
                func: member.func,
                id: member.user.id
            });

            idsInGroup.push(member.user.id);
        }

        this.allUsers = this.activatedRoute.snapshot.data.allUsers;
        for (const user of this.allUsers) {
            if (!idsInGroup.includes(user.id)) {
                this.usersNotInGroup.push({name: user.displayName, id: user.id});
            }
        }

        this.loading = false;
    }

    compare(userObject1, userObject2) {
        if (userObject1.name < userObject2.name) {
            return -1;
        } else {
            return 1;
        }
    }

    addUserToGroup(user, index) {
        this.usersInGroup.push({name: user.name, func: "Member", id: user.id});
        this.usersNotInGroup.splice(index, 1);
        this.usersInGroup.sort(this.compare);
        this.usersNotInGroup.sort(this.compare);
    }

    removeUserFromGroup(user, index) {
        this.usersNotInGroup.push({name: user.name, id: user.id});
        this.usersInGroup.splice(index, 1);
        this.usersNotInGroup.sort(this.compare);
        this.usersInGroup.sort(this.compare);
    }

    userCallbackFilter(user, query) {
        return (user as any).name.toLowerCase().includes(query.toLowerCase());
    }

    submit() {
        this.loading = true;
        console.log(this.group);
        console.log(this.usersInGroup);

        this.group.members = [];

        this.usersInGroup.forEach((newUser: any) => {
            this.group.members.push({id: newUser.id, func: newUser.func});
        });

        this.groupsService.edit(this.group).subscribe(_ => {
            this.loading = false;

            window.location.href = "/manage";
        });
    }

}
