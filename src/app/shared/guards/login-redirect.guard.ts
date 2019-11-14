import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  private activate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('logged in');
      this.router.navigate(['/dashboard']);
      return false;
    }
    console.log('not logged in');
    return true;
  }

  public canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.activate();
  }

}
