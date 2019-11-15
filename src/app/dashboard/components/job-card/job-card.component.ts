import {Component, Input, OnInit} from '@angular/core';
import {IGetJob} from "../../../shared/models/Job.model";
import {switchAll} from "rxjs/operators";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input('job')
  job: IGetJob;

  public color:string;

  constructor() { }

  ngOnInit() {
  }

  public generateColor(jobState: string): string {
    switch (jobState) {
      case "published":
        return  "success";
      case "spam":
        return "warning";
      case null:
        return "error";
    }
  }
}
