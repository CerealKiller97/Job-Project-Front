import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem("token");
    let newHeaders: HttpHeaders = req.headers;

    if (token !== null) {
      newHeaders = req.headers.append("Authorization", `Bearer ${token}`);
    }

    if (newHeaders !== null) {
      return next.handle(req.clone({ headers: newHeaders }));
    }

    return next.handle(req);
  }

  constructor() {}
}
