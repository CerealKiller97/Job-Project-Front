import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGetJob, IPostJob} from "../../shared/models/Job.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private readonly http: HttpClient) { }

  public getJobs(): Observable<any> {
    return this.http.get<any>('/job-offers');
  }

  public getJob(id: string): Observable<any> {
    return this.http.get<any>(`/job-offers/${id}`);
  }

  public postJob(job: IPostJob): Observable<IGetJob> {
    return this.http.post('/job-offers', job);
  }
}
