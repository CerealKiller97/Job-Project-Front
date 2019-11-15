import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PostJobComponent } from './components/post-job/post-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {JobsResolverService} from "./resolvers/jobs-resolver.service";
import { JobCardComponent } from './components/job-card/job-card.component';
import {JobDetailResolverService} from "./resolvers/job-detail-resolver.service";
import {ModeratorEmailsResolverService} from "./resolvers/moderator-emails-resolver.service";

const routes: Route[] = [
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "create-job", component: PostJobComponent, resolve: { emails: ModeratorEmailsResolverService } },
      { path: "jobs", component: JobListComponent, resolve: { jobs: JobsResolverService } },
      { path: "job-details/:id", component: JobDetailsComponent, resolve: { job: JobDetailResolverService } }
    ],
  }
];

@NgModule({
  declarations: [PostJobComponent, JobDetailsComponent, JobListComponent, DashboardLayoutComponent, DashboardComponent, JobCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule]
})
export class DashboardModule {}
