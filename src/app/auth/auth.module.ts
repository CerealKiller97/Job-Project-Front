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

const routes: Route[] = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "login", component: LoginComponent, canActivateChild: [LoginRedirectGuard] },
      { path: "register", component: RegisterComponent, canActivateChild: [LoginRedirectGuard], resolve: { roles: RolesResolverService } },
      { path: "logout", component: LogoutComponent, canActivateChild: [AuthGuard] }
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
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
