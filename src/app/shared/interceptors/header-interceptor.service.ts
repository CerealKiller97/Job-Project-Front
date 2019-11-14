import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class HeaderInterceptorService implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({ url: `${environment.apiUrl}${req.url}` });

    if (!req.headers.has("Content-Type")) {
      request.headers.append("Content-Type", "application/json");
    }

    if (!req.headers.has("Accept")) {
      request.headers.append("Accept", "application/json");
    }

    return next.handle(request);
  }
}
