import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGetJob} from "../../../shared/models/Job.model";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  public jobs: IGetJob[] = [];
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.jobs = this.route.snapshot.data['jobs']['data'];
  }
}
