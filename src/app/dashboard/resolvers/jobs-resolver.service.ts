import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IGetJob} from "../../shared/models/Job.model";
import {Observable} from "rxjs";
import {JobsService} from "../services/jobs.service";

@Injectable({
  providedIn: 'root'
})
export class JobsResolverService implements Resolve<IGetJob[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGetJob[]> | Promise<IGetJob[]> | IGetJob[] {
    return this.jobsService.getJobs();
  }

  constructor(private readonly jobsService: JobsService) { }
}
