import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {IGetJob} from "../../../shared/models/Job.model";
import {JobsService} from "../../services/jobs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  public job: IGetJob = null;
  private sub: Subscription;

  public constructor(private readonly route: ActivatedRoute,
                     private readonly jobsService: JobsService,
                     private readonly router: Router,
                     private readonly titleService: Title
  ) {
  }

  ngOnInit(): void {
    this.job = this.route.snapshot.data['job'];
    this.titleService.setTitle('Softwarehaus | ' + this.job.title );
  }

  deleteJob(jobId: string) {
    this.sub = this.jobsService.deleteJob(jobId).subscribe((res) => {
        // @ts-ignore
        M.toast({html: 'Successfully deleted a job.', classes: 'success'});
        setTimeout(() => {
          this.router.navigateByUrl('/jobs');
        }, 1500);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
