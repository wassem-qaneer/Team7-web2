import { Component } from '@angular/core';
import { SidebarFiltersComponent } from "../sidebar-filters/sidebar-filters.component";
import { JobListComponent } from "../job-list/job-list.component";

@Component({
  selector: 'app-job-search-page',
  standalone: true,
  imports: [SidebarFiltersComponent, JobListComponent],
  templateUrl: './job-search-page.component.html',
  styleUrl: './job-search-page.component.css'
})
export class JobSearchPageComponent {

}
