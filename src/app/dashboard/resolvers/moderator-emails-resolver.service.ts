import { Injectable } from '@angular/core';
import {RolesService} from "../../shared/services/roles.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModeratorEmailsResolverService implements Resolve<string[]> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> | Promise<string[]> | string[] {
    return this.rolesService.getModeratorEmails();
  }

  constructor(private readonly rolesService: RolesService) { }
}
