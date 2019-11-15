import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {IGetJob} from "../../../shared/models/Job.model";
import {JobsService} from "../../services/jobs.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  public subscription: Subscription;
  public job: IGetJob = null;

  public constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.data['job']);
  }

}
