import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IGetRole {
  id: string;
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class RolesService {
  constructor(private readonly http: HttpClient) {}

  public getRoles(): Observable<IGetRole[]> {
    return this.http.get<IGetRole[]>("/roles");
  }
}
