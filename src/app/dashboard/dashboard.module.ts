import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PostJobComponent } from './components/post-job/post-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Route[] = [
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "create-job", component: PostJobComponent },
      { path: "jobs", component: JobListComponent }
    ],
  }
];

@NgModule({
  declarations: [PostJobComponent, JobDetailsComponent, JobListComponent, DashboardLayoutComponent, DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DashboardModule {}
