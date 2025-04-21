import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JobService {
  private jobs = [
    { title: 'UX Designer', status: 'Open', applications: 25, image: 'assests/ux-designer.png' },
    { title: 'Project Manager', status: 'Closed', applications: 45, image: 'assests/project-manager.jpg' },
    { title: 'Web Developer', status: 'In Progress', applications: 30, image: 'assests/web-developer.jpg' },
    { title: 'Data Analyst', status: 'Open', applications: 15, image: 'assests/data-analyst.jpg' }
  ];

  getJobs() {
    return this.jobs;
  }
}
