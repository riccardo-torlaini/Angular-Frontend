import {Injectable} from '@angular/core';
import {GroupsService} from "./groups.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CommitteesResolverService implements Resolve<any> {

    constructor(private groupsService: GroupsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.groupsService.getAllOfType("Committee")
    }
}
