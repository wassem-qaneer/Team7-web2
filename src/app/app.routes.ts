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
  { path: 'PostNewJob', component: PostNewJobComponent },
  { path: 'noto', component: NotificationsComponent },
  { path: 'JobChartComponent', component: JobChartComponent },
  { path: '**', component: Error404Component },
];
