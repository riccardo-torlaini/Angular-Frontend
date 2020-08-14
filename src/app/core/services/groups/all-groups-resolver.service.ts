import { Injectable } from '@angular/core';
import {GroupsService} from "./groups.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllGroupsResolverService implements Resolve<any> {

  constructor(private groupsService: GroupsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.groupsService.getAll();
    }
}
