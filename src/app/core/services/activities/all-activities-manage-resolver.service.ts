import { Injectable } from '@angular/core';
import {ActivitiesService} from "./activities.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllActivitiesManageResolverService implements Resolve<any> {

  constructor(private activitiesService: ActivitiesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.activitiesService.getAllManage();
    }
}
