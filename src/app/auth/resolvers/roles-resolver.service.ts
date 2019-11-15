import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IGetRole, RolesService} from "../../shared/services/roles.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RolesResolverService implements  Resolve<IGetRole[]> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGetRole[]> | Promise<IGetRole[]> | IGetRole[] {

    return this.rolesService.getRoles();
  }

  constructor(private readonly rolesService: RolesService) { }
}
