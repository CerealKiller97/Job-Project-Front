import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";

export interface IGetRole {
  id: string;
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class RolesService {
  constructor(private readonly http: HttpClient) {
  }

  public getRoles(): Observable<any> {
    return this.http.get<any>("/roles");
  }
}
