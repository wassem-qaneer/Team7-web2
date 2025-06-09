import { Component } from '@angular/core';
import { SidebarFiltersComponent } from "../sidebar-filters/sidebar-filters.component";
import { JobListComponent } from "../job-list/job-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-search-page',
  standalone: true,
  imports: [SidebarFiltersComponent, JobListComponent, CommonModule],
  templateUrl: './job-search-page.component.html',
  styleUrl: './job-search-page.component.css'
})
export class JobSearchPageComponent {

  salaryValue: number = 0;

  updateSlider(event: any) {
    const range = event.target;
    const value = (range.value - range.min) / (range.max - range.min) * 100;
    range.style.setProperty('--val', `${value}%`);

    this.salaryValue = range.value;
  }


}

