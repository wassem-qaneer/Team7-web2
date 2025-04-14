import { Routes } from '@angular/router';
import { JobSeekerLoginComponent } from './component/job-seeker-login/job-seeker-login.component';
import { JobSeekerRegisterComponent } from './component/job-seeker-register/job-seeker-register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { EmployerLoginComponent } from './component/employer-login/employer-login.component';
import { EmployerRegisterComponent } from './component/employer-register/employer-register.component';
import { Error404Component } from './component/error-404/error-404.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    {path : "" , component: HomeComponent},
    { path: 'job-seeker-register', component: JobSeekerRegisterComponent },
    { path: 'job-seeker-login', component: JobSeekerLoginComponent },
    { path: 'employer-register', component: EmployerRegisterComponent },
    { path: 'employer-login', component: EmployerLoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    {path : 'contact-us' , component: ContactUsComponent},
    {path : 'login' , component: LoginComponent},
    {path : '**' , component: Error404Component},
]
