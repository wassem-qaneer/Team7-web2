import { Component } from '@angular/core';
import { EmployerBenefitsComponent } from '../../component/employer-benefits/employer-benefits.component';
import { ContactUsComponent } from '../../component/contact-us/contact-us.component';
import { JobListingsComponent } from '../../component/job-listings/job-listings.component';
import { JobSearchComponent } from '../../component/job-search/job-search.component';


@Component({
  selector: 'app-home',
  imports: [ JobSearchComponent, JobListingsComponent, EmployerBenefitsComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
