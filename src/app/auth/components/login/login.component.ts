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
import {Title} from "@angular/platform-browser";

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
    private readonly router: Router,
    private readonly titleService: Title
  ) {}

  public ngOnInit() {
    this.titleService.setTitle('Softwarehaus | Login');
  }

  public login(): void {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = this.loginForm.getRawValue();
      this.subscriptions.push(
        this.authService.login(credentials).subscribe(
          (res: LoginResponse) => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            this.router.navigate(['/']);
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
