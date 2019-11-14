import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  public subsrciption: Subscription = null;
  public message: string = null;
  public error: string = null;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.subsrciption = this.authService.logout().subscribe(res => {
        this.message = res;
        this.router.navigate(['/auth/login']);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
        this.error = err.error;
      });
  }

  ngOnDestroy() {
    if (this.subsrciption) {
      this.subsrciption.unsubscribe();
    }
  }
}
