import { Component } from '@angular/core';
import { EmployerBenefitsComponent } from '../../component/employer-benefits/employer-benefits.component';
import { ContactUsComponent } from '../../component/contact-us/contact-us.component';
import { JobListingsComponent } from '../../component/job-listings/job-listings.component';
import { JobSearchComponent } from '../../component/job-search/job-search.component';
import {ApplicationTrackingComponent} from '../../component/application-tracking/application-tracking.component';
import {StatsCardComponent} from '../../component/stats-card/stats-card.component';
import {MySaveJobComponent} from '../../component/my-save-job/my-save-job.component';

@Component({
  selector: 'app-home',
  imports: [ ApplicationTrackingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
