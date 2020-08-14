import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ActivitiesService} from "./activities.service";

@Injectable({
    providedIn: 'root'
})
export class AllActivitiesResolverService implements Resolve<any> {

    constructor(private activitiesService: ActivitiesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.activitiesService.getAll();
    }
}
