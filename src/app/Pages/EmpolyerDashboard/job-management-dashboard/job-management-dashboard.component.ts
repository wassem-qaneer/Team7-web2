import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';

// Interfaces for type safety
interface Job {
  id: number;
  title: string;
  company: string;
  status: 'Open' | 'Closed';
  description?: string;
  salary?: string;
  frequency?: string;
  type?: string;
  currency?: string;
  location?: string;
}

interface Application {
  applicantName: string;
  position: string;
  status: string;
  cv: string;
  coverLetter: string;
}

@Component({
  selector: 'app-job-management-dashboard',
  templateUrl: './job-management-dashboard.component.html',
  styleUrls: ['./job-management-dashboard.component.css'],
  standalone: true,
  imports: [CardsComponent, RouterLink, FormsModule, NgClass, NgForOf, NgIf],
})
export class JobManagementDashboardComponent implements OnInit {
  // Job Postings Data
  jobPostings: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions',
      status: 'Open',
      description: 'Develop and maintain applications.',
      salary: '90000',
      currency: 'USD',
      frequency: 'Yearly',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Brand Boosters',
      status: 'Open',
      description: 'Lead marketing campaigns.',
      salary: '75000',
      currency: 'USD',
      frequency: 'Yearly',
      type: 'Full-time',
      location: 'New York',
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Data Gurus',
      status: 'Closed',
      description: 'Analyze data sets.',
      salary: '70000',
      currency: 'USD',
      frequency: 'Yearly',
      type: 'Full-time',
      location: 'Chicago',
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'Innovate Inc.',
      status: 'Open',
      description: 'Manage product roadmap.',
      salary: '100000',
      currency: 'USD',
      frequency: 'Yearly',
      type: 'Full-time',
      location: 'San Francisco',
    },
    {
      id: 5,
      title: 'Web Developer',
      company: 'Code Crew',
      status: 'Open',
      description: 'Build responsive web apps.',
      salary: '80000',
      currency: 'USD',
      frequency: 'Yearly',
      type: 'Full-time',
      location: 'Remote',
    }
  ];

  // Applications Data
  applications: Application[] = [
    {
      applicantName: 'John Doe',
      position: 'Software Engineer',
      status: 'Rejected',
      cv: 'john_doe_cv.pdf',
      coverLetter: 'john_doe_cover_letter.pdf'
    },
    {
      applicantName: 'Jane Smith',
      position: 'Data Analyst',
      status: 'Accepted',
      cv: 'jane_smith_cv.pdf',
      coverLetter: 'jane_smith_cover_letter.pdf'
    },
    {
      applicantName: 'Alice Johnson',
      position: 'Graphic Designer',
      status: 'Accepted',
      cv: 'alice_johnson_cv.pdf',
      coverLetter: 'alice_johnson_cover_letter.pdf'
    }
  ];

  // Statistics
  totalJobs: number = 0;
  openJobs: number = 0;
  closedJobs: number = 0;

  // Modal and Form Fields
  selectedJob: Job | null = null;
  showModal: boolean = false;

  jobTitle: string = '';
  jobDescription: string = '';
  customRequirement: string = '';
  salary: string = '';
  frequency: string = '';
  type: string = '';
  currency: string = '';
  location: string = '';
  isChecked: boolean = false;
  requirements: { [key: string]: boolean } = {
    bachelor: false,
    master: false,
    phd: false,
    certification: false,
  };
  numOfEnteredWord: number = 0;
  maxWords: number = 500;
  companyLogo: File | null = null;
  relatedDocuments: File | null = null;

  ngOnInit() {
    this.updateStatistics();
  }

  // Update statistics
  updateStatistics() {
    this.totalJobs = this.jobPostings.length;
    this.openJobs = this.jobPostings.filter(job => job.status === 'Open').length;
    this.closedJobs = this.jobPostings.filter(job => job.status === 'Closed').length;
  }

  // Word counter
  countWords() {
    if (!this.jobDescription.trim()) {
      this.numOfEnteredWord = 0;
      return;
    }

    const words = this.jobDescription.trim().split(/\s+/);
    this.numOfEnteredWord = words.length;

    if (this.numOfEnteredWord > this.maxWords) {
      const limitedWords = words.slice(0, this.maxWords);
      this.jobDescription = limitedWords.join(' ');
      this.numOfEnteredWord = this.maxWords;
    }
  }

  // Open modal with job data
  openEditModal(job: Job) {
    this.selectedJob = { ...job };
    this.jobTitle = job.title || '';
    this.jobDescription = job.description || '';
    this.salary = job.salary || '';
    this.frequency = job.frequency || '';
    this.type = job.type || '';
    this.currency = job.currency || '';
    this.location = job.location || '';
    this.showModal = true;
  }

  // Save job updates
  saveJobChanges(form: any) {
    if (form.valid && this.selectedJob) {
      const index = this.jobPostings.findIndex(job => job.id === this.selectedJob?.id);
      if (index !== -1) {
        this.jobPostings[index] = {
          ...this.jobPostings[index],
          title: this.jobTitle,
          description: this.jobDescription,
          salary: this.salary,
          frequency: this.frequency,
          type: this.type,
          currency: this.currency,
          location: this.location
        };
        this.updateStatistics();
        alert('Job updated successfully!');
      }
      this.closeModal();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  // Close modal
  closeModal() {
    this.showModal = false;
    this.selectedJob = null;
    this.resetForm();
  }

  // Reset form
  resetForm() {
    this.jobTitle = '';
    this.jobDescription = '';
    this.customRequirement = '';
    this.salary = '';
    this.frequency = '';
    this.type = '';
    this.currency = '';
    this.location = '';
    this.isChecked = false;
    this.requirements = {
      bachelor: false,
      master: false,
      phd: false,
      certification: false,
    };
    this.numOfEnteredWord = 0;
    this.companyLogo = null;
    this.relatedDocuments = null;
  }

  // Delete a job
  deleteJob(jobId: number) {
    this.jobPostings = this.jobPostings.filter(job => job.id !== jobId);
    this.updateStatistics();
  }

  // Status change handler
  onStatusChange(job: Job) {
    this.updateStatistics();
  }

  // Application status update
  updateApplicationStatus(application: Application, newStatus: string) {
    application.status = newStatus;
  }

  // File upload handler
  onFileChange(event: any, type: 'logo' | 'documents') {
    const file = event.target.files[0];
    if (file) {
      if (type === 'logo') {
        this.companyLogo = file;
        console.log('Logo file selected:', file.name);
      } else {
        this.relatedDocuments = file;
        console.log('Document file selected:', file.name);
      }
    }
  }

  // Optional: Improve ngFor performance
  trackByJobId(index: number, job: Job) {
    return job.id;
  }
}
