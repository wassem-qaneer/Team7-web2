import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { JobSearchComponent } from "./components/job-search/job-search.component";
import { JobListingsComponent } from "./components/job-listings/job-listings.component";
import { EmployerBenefitsComponent } from "./components/employer-benefits/employer-benefits.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-portal';
}
