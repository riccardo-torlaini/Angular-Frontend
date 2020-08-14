import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {GroupsService} from "./groups.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpecificGroupResolverService implements Resolve<any> {

    constructor(private groupsService: GroupsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.groupsService.get(route.paramMap.get("groupId"));
    }
}
