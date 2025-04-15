import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-save-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-save-job.component.html',
  styleUrls: ['./my-save-job.component.css']
})
export class MySaveJobComponent {
  jobs = [
    { title: 'UX Designer', status: 'Open', applications: 25, image: 'assets/ux-designer.png' },
    { title: 'Project Manager', status: 'Closed', applications: 45, image: 'assets/project-manager.jpg' },
    { title: 'Web Developer', status: 'In Progress', applications: 30, image: 'assets/web-developer.jpg' },
    { title: 'Data Analyst', status: 'Open', applications: 15, image: 'assets/data-analyst.jpg' }
  ];

  visibleCount  =3;
  get visibleJobs() {
    return this.jobs.slice(0, this.visibleCount);
  }

  showMore() {
    if (this.visibleCount < this.jobs.length) {
      this.visibleCount = this.jobs.length;
    }
  }

  get allJobsShown() {
    return this.visibleCount >= this.jobs.length;
  }

  remove(index: any) {
    this.jobs.splice(index, 1);

    if (this.visibleCount > this.jobs.length) {
      this.visibleCount = this.jobs.length;
    }
  }
}
