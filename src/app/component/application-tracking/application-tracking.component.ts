import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-application-tracking',
  standalone: true,
  templateUrl: './application-tracking.component.html',
  styleUrls: ['./application-tracking.component.css'],
  imports: [CommonModule]
})
export class ApplicationTrackingComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }
}
