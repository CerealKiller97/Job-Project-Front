import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IGetJob} from "../../shared/models/Job.model";
import {Observable} from "rxjs";
import {JobsService} from "../services/jobs.service";

@Injectable({
  providedIn: "root"
})
export class JobDetailResolverService implements Resolve<any> {
  constructor(private readonly jobsService: JobsService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | IGetJob {
    const id: string = route.params['id'];

    return this.jobsService.getJob(id);
  }
}
