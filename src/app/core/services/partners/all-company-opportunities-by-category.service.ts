import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {forkJoin, Observable, of} from "rxjs";
import {PartnersService} from "./partners.service";
import {AppConstants} from "../../../app.constants";

@Injectable({
    providedIn: 'root'
})
export class AllCompanyOpportunitiesByCategoryService implements Resolve<any> {

    constructor(private partnersService: PartnersService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const arr = [];

        for (const cat of AppConstants.companyOpportunityCategories) {
            arr.push(this.partnersService.getAllCompanyOpportunitiesOfCategory(cat));
        }

        return of(arr);
    }

}
