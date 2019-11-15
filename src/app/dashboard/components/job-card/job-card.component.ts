import {Component, Input, OnInit} from '@angular/core';
import {IGetJob} from "../../../shared/models/Job.model";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input('job')
  job: IGetJob;

  constructor() { }

  ngOnInit() {
  }

}
