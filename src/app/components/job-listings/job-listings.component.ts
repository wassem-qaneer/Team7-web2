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
      location: 'Nablus, palestine',
      type: 'Full-Time',
      image: 'https://c8.alamy.com/comp/MP6D15/job-opening-front-end-developer-3d-MP6D15.jpg',
    },
    {
      title: 'Backend Engineer',
      company: 'CodeMasters',
      location: 'Amman, Jordan',
      type: 'Part-Time',
      image: 'https://newline.tech/wp-content/uploads/2023/07/Profession_-Backend-Developer.png',
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignPro',
      location: 'DOHA, Qatar',
      type: 'Contract',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mobile App Developer',
      company: 'AppZone',
      location: 'Cairo, Egypt',
      type: 'Full-Time',
      image: 'https://www.shutterstock.com/image-photo/panorama-shot-frontend-developer-team-600nw-2304027635.jpg',
    },
    {
      title: 'Project Manager',
      company: 'ManageIt',
      location: 'Ramallah, Palestine',
      type: 'Full-Time',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Data Analyst',
      company: 'DataWiz',
      location: 'Beirut, Lebanon',
      type: 'Remote',
      image: 'https://thumbs.dreamstime.com/b/data-analyst-african-woman-using-spreadsheet-data-analyst-african-woman-using-spreadsheet-computer-222255910.jpg',
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

