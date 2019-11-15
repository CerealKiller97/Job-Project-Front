import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGetJob} from "../../../shared/models/Job.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  public jobs: IGetJob[] = null;
  constructor(private readonly route: ActivatedRoute, private readonly titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Softwarehaus | Jobs list');

    this.jobs = this.route.snapshot.data['jobs']['data'];
  }


}
