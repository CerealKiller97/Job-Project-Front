import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  private subsription: Subscription = null;

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
    this.subsription = this.authService.logout().subscribe((res: string) => {

    },
      (err: HttpErrorResponse) => {
        this.router.navigate(['/auth/login']);
      }
    );
  }

}
