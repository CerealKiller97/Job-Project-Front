import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptorService } from "./interceptors/auth-interceptor.service";
import { HeaderInterceptorService } from "./interceptors/header-interceptor.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      multi: true,
      useClass: AuthInterceptorService,
      provide: HTTP_INTERCEPTORS
    },
    {
      multi: true,
      useClass: HeaderInterceptorService,
      provide: HTTP_INTERCEPTORS
    }
  ]
})
export class SharedModule {}
