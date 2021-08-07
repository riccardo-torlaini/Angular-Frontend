import {Injectable} from '@angular/core';
import {WebRequestService} from "../web-request.service";
import {HttpResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GroupsService {

    constructor(private webRequestService: WebRequestService) {
    }

    /**
     * Function for retrieving all groups from backend.
     */
    getAll() {
        return this.webRequestService.get("api/groups").pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('GroupsService.getAll: Error when getting all groups');
                console.error(err);
                return of([]);
            })
        );
    }

    /**
     * Function for retrieving all groups from backend of a certain type.
     * @param type  Type of the groups to be returned.
     */
    getAllOfType(type: string) {
        return this.webRequestService.get("api/groups/type/" + type).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('GroupsService.getAllOfType: Error when getting all groups of type ' + type);
                console.error(err);
                return of([]);
            })
        );
    }

    /**
     * Retrieves group based on id.
     * @param groupId   Id of the group.
     */
    get(groupId) {
        return this.webRequestService.get("api/groups/" + groupId).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('GroupsService.get: Error when getting group with id ' + groupId);
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting a group for creation in the backend.
     * @param group     Object that represents the group.
     */
    create(group) {
        return this.webRequestService.post("api/groups", group).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('GroupsService.create: Error when creating group');
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting a group for editing in the backend.
     * @param group         Object that represents the (edited) group.
     * @param userGroup    List of members of the group in format {name, function, id}.
     */
    edit(group) {
        return this.webRequestService.put("api/groups/" + group.id, group).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('GroupsService.create: Error when editing group with id ' + group.id);
                console.error(group);
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting a group for deletion in the backend.
     * @param groupId     Id of the group to be deleted.
     */
    delete(groupId) {
        return this.webRequestService.delete("api/groups/" + groupId).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('GroupsService.delete: Error when deleting group with id ' + groupId);
                console.error(err);
                return of({});
            })
        );
    }
}
