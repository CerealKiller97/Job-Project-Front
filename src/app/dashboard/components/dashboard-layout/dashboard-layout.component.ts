import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import * as M from  "materialize-css/dist/js/materialize";
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {


  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
