import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-applied-jobs',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent {
  jobs: {
    title: string;
    company: string;
    date: string;
    status: 'Accepted' | 'Pending' | 'Rejected';
    image: string;
  }[] = [
    {
      title: 'UX Designer',
      company: 'Google Inc.',
      date: 'Oct 5, 2023',
      status: 'Accepted',
      image: 'https://cdn.dribbble.com/uploads/256/original/data?1537558097'
    },
    {
      title: 'Data Analyst',
      company: 'Amazon Web Services',
      date: 'Oct 2, 2023',
      status: 'Pending',
      image: 'https://www.rasmussen.edu/images/rasmussenlibraries/blogs/school-of-technology/dataanalystjobdescription_banner.jpg?sfvrsn=cc4da612_1'
    },
    {
      title: 'Software Engineer',
      company: 'Microsoft Corporation',
      date: 'Oct 7, 2023',
      status: 'Rejected',
      image: 'https://engineerseekingfire.com/wp-content/uploads/2023/10/microsoft-recruiting-1536x878.webp'
    },
    {
      title: 'UX Designer',
      company: 'Google Inc.',
      date: 'Oct 5, 2023',
      status: 'Accepted',
      image: 'https://cdn.dribbble.com/uploads/256/original/data?1537558097 '
    },
    {
      title: 'Data Analyst',
      company: 'Amazon Web Services',
      date: 'Oct 2, 2023',
      status: 'Pending',
      image: 'https://www.rasmussen.edu/images/rasmussenlibraries/blogs/school-of-technology/dataanalystjobdescription_banner.jpg?sfvrsn=cc4da612_1'
    },
    {
      title: 'Software Engineer',
      company: 'Microsoft Corporation',
      date: 'Oct 7, 2023',
      status: 'Rejected',
      image: 'https://engineerseekingfire.com/wp-content/uploads/2023/10/microsoft-recruiting-1536x878.webp'
    }
  ];
}
