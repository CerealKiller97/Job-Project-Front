import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import {
  LoginCredentials,
  LoginResponse
} from "src/app/shared/models/User.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { IGetRole } from "src/app/shared/services/roles.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];

  public readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  public roles: IGetRole[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public ngOnInit() {}

  public login() {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = this.loginForm.getRawValue();
      this.subscriptions.push(
        this.authService.login(credentials).subscribe(
          (res: LoginResponse) => {
            console.log(res);
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
