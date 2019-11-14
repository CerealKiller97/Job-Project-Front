import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private readonly http: HttpClient) { }

  public verifyAccount(token: string): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`/verify/${token}`);
  }
}
