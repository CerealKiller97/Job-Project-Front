import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VerificationService} from "../../services/verification.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  public message: string = null;
  public error: string = null;

  constructor(private readonly route: ActivatedRoute, private readonly verificationService: VerificationService, private readonly router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(({ token }) => {
      this.verificationService.verifyAccount(token).subscribe(({ message }) => {
       this.message = message;
      },
        (err: HttpErrorResponse) => {
          this.error = err.error.message;
        });
    });
  }
  public proccedToLogin() {
    this.router.navigateByUrl('/auth/login');
  }
}
