import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import {
  IRegisterUser,
  LoginCredentials,
  LoginResponse
} from "../models/User.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public isAuthenticated(): boolean {
    const token: string | null = localStorage.getItem("token");

    if (token === null) {
      return false;
    }

    const jwtService: JwtHelperService = new JwtHelperService();

    return !jwtService.isTokenExpired(token);
  }

  public register(register: IRegisterUser): Observable<string> {
    return this.http.post<string>("/auth/register", register);
  }

  public login(login: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("/auth/login", login);
  }

  public logout(): Observable<string> {
    return this.http.post<string>("/auth/logout", undefined);
  }
}
