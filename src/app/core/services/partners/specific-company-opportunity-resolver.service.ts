import {Injectable} from '@angular/core';
import {PartnersService} from "./partners.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpecificCompanyOpportunityResolverService implements Resolve<any> {

    constructor(private partnersService: PartnersService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.partnersService.getCompanyOpportunity(route.paramMap.get("internshipId"));
    }
}
