
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import { JobService } from '../../services/job.service';

interface Job {
  title: string;
  status: string;
  applications: number;
  image: string;
}


@Component({
  selector: 'app-my-save-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-save-job.component.html',
  styleUrls: ['./my-save-job.component.css']
})

export class MySaveJobComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }

  visibleCount = 3;

  get visibleJobs() {
    return this.jobs.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount = this.jobs.length;

  }

  get allJobsShown() {
    return this.visibleCount >= this.jobs.length;
  }


  remove(index: number) {
    this.jobs.splice(index, 1);

    if (this.visibleCount > this.jobs.length) {
      this.visibleCount = this.jobs.length;
    }
  }
}
