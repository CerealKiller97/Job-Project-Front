import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs";
import { IRegisterUser } from "src/app/shared/models/User.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { IGetRole, RolesService } from "src/app/shared/services/roles.service";
import {Title} from "@angular/platform-browser";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  public roles: IGetRole[] = [];

  public readonly registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern("//")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$/")
    ]),
    password_confirmation: new FormControl("", [Validators.required]),
    role_id: new FormControl("", [Validators.required])
  });

  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly titleService: Title
  ) {}

  ngOnInit() {
    this.roles = this.route.snapshot.data['roles'];
    this.titleService.setTitle('Softwarehaus | Register');
  }

  public register(): void {
    if (this.registerForm.valid) {
      const registerUser: IRegisterUser = this.registerForm.getRawValue();
      this.subscriptions.push(
        this.authService.register(registerUser).subscribe(
          (res: string) => {
            console.log(res);
            // this.router.navigate(['/dashboard']);
          },
          (error: HttpErrorResponse) => {
            console.error(error);
          }
        )
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
