import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs";
import {
  LoginCredentials,
  LoginResponse
} from "src/app/shared/models/User.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { IGetRole } from "src/app/shared/services/roles.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  public error: string = null;
  public showSpinner = false;

  public readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$')
    ])
  });

  public roles: IGetRole[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.queryParamMap.subscribe((qs) => {
      const msg: string = qs.get('msg');
      if (msg !== null) {
        if (msg === 'already-activated') {
          // @ts-ignore
          M.toast({ html: 'You account has already been activated.', classes: "warning" });
        } else {
          // @ts-ignore
          M.toast({ html: 'Successfully activated account.', classes: "success" });
        }
      }
    });
    this.titleService.setTitle("Softwarehaus | Login");
  }

  public login(): void {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = this.loginForm.getRawValue();
      this.subscriptions.push(
        this.authService.login(credentials).subscribe(
          (res: LoginResponse) => {
            this.showSpinner = true;
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            // @ts-ignore
            M.toast({ html: "Welcome back " + res.user.name, displayLength: 1750 });

            setTimeout(() => {
              this.router.navigateByUrl("/create-job");
            }, 2500);
          },
          (error: HttpErrorResponse) => {
            this.error = error.error.message;
            // @ts-ignore
            M.toast({ html: this.error, classes: "error" });
          }
        )
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
