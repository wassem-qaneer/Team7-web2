import { Routes } from '@angular/router';
import { JobSeekerLoginComponent } from './component/job-seeker-login/job-seeker-login.component';
import { JobSeekerRegisterComponent } from './component/job-seeker-register/job-seeker-register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { EmployerLoginComponent } from './component/employer-login/employer-login.component';
import { EmployerRegisterComponent } from './component/employer-register/employer-register.component';
import { Error404Component } from './component/error-404/error-404.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { JobManagementDashboardComponent } from './Pages/EmpolyerDashboard/job-management-dashboard/job-management-dashboard.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import {SideBarComponent} from './Pages/AdminDashBoard/Components/side-bar/side-bar.component';
import {AnalyticsComponent} from './Pages/AdminDashBoard/Components/analytics/analytics.component';
import {
  ManageJopPostingComponent
} from './Pages/AdminDashBoard/Components/manage-jop-posting/manage-jop-posting.component';
import {ReportsComponent} from './Pages/AdminDashBoard/Components/reports/reports.component';
import {ManageUsersComponent} from './Pages/AdminDashBoard/Components/manage-users/manage-users.component';

import { JobChartComponent } from './component/job-chart/job-chart.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { PostNewJobComponent } from './Pages/JobPostPage/post-new-job/post-new-job.component';
import { JobComponent } from './Pages/job/job.component';
import { TrackingComponent } from './Pages/tracking/tracking.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-job', component: JobComponent },
  { path: 'track', component: TrackingComponent },
  { path: 'job-seeker-register', component: JobSeekerRegisterComponent },
  { path: 'job-seeker-login', component: JobSeekerLoginComponent },
  { path: 'employer-register', component: EmployerRegisterComponent },
  { path: 'employer-login', component: EmployerLoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'JobManagementDashboard',
    component: JobManagementDashboardComponent,
  },

  { path: 'postNewJob', component: PostNewJobComponent },
  {path: 'Analytics' ,component:AnalyticsComponent},
  {path: 'ManageJopPosting' ,component:ManageJopPostingComponent},
  {path: 'ManageUsers' ,component:ManageUsersComponent},
  {path: 'Reports' ,component:ReportsComponent},



  { path: 'noto', component: NotificationsComponent },
  { path: 'JobChartComponent', component: JobChartComponent },

  { path: '**', component: Error404Component },
];

