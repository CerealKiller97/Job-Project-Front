import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import {LoginRedirectGuard} from "../shared/guards/login-redirect.guard";
import { LogoutComponent } from './components/logout/logout.component';
import {AuthGuard} from "../shared/guards/auth.guard";
import {RolesResolverService} from "./resolvers/roles-resolver.service";
import { VerificationComponent } from './components/verification/verification.component';

const routes: Route[] = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "login", component: LoginComponent, canActivate: [LoginRedirectGuard] },
      { path: "register", component: RegisterComponent, canActivate: [LoginRedirectGuard], resolve: { roles: RolesResolverService } },
      { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] },
      { path: "verification", component: VerificationComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AuthLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    VerificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
