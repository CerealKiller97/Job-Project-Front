import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs";
import { IRegisterUser } from "src/app/shared/models/User.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { IGetRole, RolesService } from "src/app/shared/services/roles.service";
import { Title } from "@angular/platform-browser";
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  public roles: IGetRole[] = [];
  public error: string;

  public readonly registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      // Validators.pattern("/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$/")
    ]),
    role_id: new FormControl("", [Validators.required])
  });

  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly titleService: Title
  ) {}

  ngOnInit() {
    this.roles = this.route.snapshot.data['roles']['data'];
    this.titleService.setTitle('Softwarehaus | Register');
  }

  public register(): void {
    if (this.registerForm.valid) {
      const data: IRegisterUser = this.registerForm.getRawValue();

      const registerUser = {
        ...data,
        password_confirmation: data.password
      };

      this.subscriptions.push(
        this.authService.register(registerUser).subscribe(
          ({ message }) => {
            this.registerForm.reset();

            M.toast({ html: message, displayLength: 1750 });

          },
          (error: HttpErrorResponse) => {
            switch (error.status) {
              case 409:
                this.error = error.error;
                break;
              case 422:
                this.error = error.error.errors.email[0];
                break;
            }
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
