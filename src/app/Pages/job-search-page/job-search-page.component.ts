import { Component } from '@angular/core';
import { SidebarFiltersComponent } from "../../component/sidebar-filters/sidebar-filters.component";
import { JobListComponent } from "../../component/job-list/job-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-search-page',
  standalone: true,
  imports: [SidebarFiltersComponent, JobListComponent,RouterModule],
  templateUrl: './job-search-page.component.html',
  styleUrl: './job-search-page.component.css'
})
export class JobSearchPageComponent {

}
