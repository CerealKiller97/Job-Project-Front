import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobsService} from "../../services/jobs.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {
  private subscription: Subscription;
  public readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    description: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private readonly jobsService: JobsService, private readonly titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Softwarehaus | Post a job');
  }

  postJob(): void {
    if (this.jobForm.valid) {
      const data = this.jobForm.getRawValue();
      this.subscription = this.jobsService.postJob(data).subscribe((job) => {
        this.jobForm.reset();
        // @ts-ignore
        M.toast({ html: "Successfully posted a job", classes: "success"  });
      },
        (error: HttpErrorResponse) => {
          console.error(error);
        });
    }
  }
}
