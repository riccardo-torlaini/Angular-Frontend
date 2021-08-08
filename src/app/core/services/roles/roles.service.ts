import { Injectable } from '@angular/core';
import {WebRequestService} from "src/app/core/services/web-request.service";
import {HttpResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private webRequestService: WebRequestService) { }

    /**
     * Function for retrieving all roles from backend.
     */
    getAll() {
        return this.webRequestService.get("api/roles").pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('RolesService.getAll: Error when getting all roles from backend');
                console.error(err);
                return of([]);
            })
        );
    }

    /**
     * Function for retrieving a single role from the backend.
     * @param roleId    The id of the role to retrieve.
     */
    get(roleId) {
        return this.webRequestService.get("api/roles/" + roleId).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('RolesService.get: Error when getting role from backend with id ' + roleId);
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting a role for creation in the backend.
     * @param role  Object representing the role to be created.
     */
    create(role) {
        return this.webRequestService.post("api/roles", role).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('RolesService.create: Error when creating role in the backend.');
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting a role to be edited.
     * @param role      Object representing the (edited) role.
     */
    edit(role) {
        return this.webRequestService.put("api/role/" + role.id, role).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('RolesService.edit: Error when editing role in backend with id ' + role.id);
                console.error(err);

                return of({});
            })
        );
    }

    /**
     * Function for deleting role in the backend.
     * @param roleId    Id of the role to be deleted.
     */
    delete(roleId) {
        return this.webRequestService.delete("api/roles/" + roleId).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('RolesService.delete: Error when deleting role in the backend with id ' + roleId);
                console.error(err);
                return of({});
            })
        );
    }
}
