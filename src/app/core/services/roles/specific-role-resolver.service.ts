import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {RolesService} from "src/app/core/services/roles/roles.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpecificRoleResolverService implements Resolve<any> {

  constructor(private rolesService: RolesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.rolesService.get(route.paramMap.get("roleId"));
  }
}
