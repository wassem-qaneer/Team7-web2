import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-listings.component.html',
})
export class JobListingsComponent {
  allJobs = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Nablus, Palestine',
      type: 'Full-Time',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Backend Engineer',
      company: 'CodeMasters',
      location: 'jordan, Amman',
      type: 'Part-Time',
      image: 'https://newline.tech/wp-content/uploads/2023/07/Profession_-Backend-Developer.png',
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignPro',
      location: 'Dubai, UAE',
      type: 'Contract',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mobile App Developer',
      company: 'AppZone',
      location: 'Cairo, Egypt',
      type: 'Full-Time',
      image: 'https://www.shutterstock.com/shutterstock/photos/1717584028/display_1500/stock-photo-ai-artificial-intelligence-concept-deep-learning-gui-graphical-user-interface-1717584028.jpg',
    },
    {
      title: 'Project Manager',
      company: 'ManageIt',
      location: 'Milano,italy',
      type: 'Full-Time',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Data Analyst',
      company: 'DataWiz',
      location: 'Beirut, Lebanon',
      type: 'Remote',
      image: 'https://assets.datamation.com/uploads/2024/01/dm_20240124-data-analytics-techniques.png',
    },
  ];

  visibleJobs = 3;

  get jobsToShow() {
    return this.allJobs.slice(0, this.visibleJobs);
  }

  showMoreJobs() {
    this.visibleJobs = this.allJobs.length;
  }
  showLessJobs() {
    this.visibleJobs = 3;
  }

}

