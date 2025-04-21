import { Component } from '@angular/core';
import { EmployerBenefitsComponent } from '../../component/employer-benefits/employer-benefits.component';
import { ContactUsComponent } from '../../component/contact-us/contact-us.component';
import { JobListingsComponent } from '../../component/job-listings/job-listings.component';
import { JobSearchComponent } from '../../component/job-search/job-search.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [EmployerBenefitsComponent,ContactUsComponent,JobListingsComponent,JobSearchComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
