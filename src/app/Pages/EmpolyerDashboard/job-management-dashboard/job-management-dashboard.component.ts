import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-job-management-dashboard',
  templateUrl: './job-management-dashboard.component.html',
  styleUrls: ['./job-management-dashboard.component.css'],
  standalone: true,
  imports: [CardsComponent, RouterLink, FormsModule, NgClass, NgForOf, NgIf],
})
export class JobManagementDashboardComponent implements OnInit {

  jobPostings = [
    { id: 1, title: 'Software Engineer', company: 'Tech Solutions', status: 'Open' },
    { id: 2, title: 'Marketing Manager', company: 'Brand Boosters', status: 'Open' },
    { id: 3, title: 'Data Analyst', company: 'Data Gurus', status: 'Open' },
    { id: 4, title: 'Product Manager', company: 'Innovate Inc.', status: 'Open' },
    { id: 5, title: 'Web Developer', company: 'Code Crew', status: 'Open' },
  ];

  applications = [
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

  totalJobs: number = 0;
  openJobs: number = 0;
  closedJobs: number = 0;

  selectedJob: any = null;
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


  updateStatistics() {
    this.totalJobs = this.jobPostings.length;
    this.openJobs = this.jobPostings.filter(job => job.status === 'Open').length;
    this.closedJobs = this.jobPostings.filter(job => job.status === 'Close').length;
  }


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


  openEditModal(job: any) {
    this.selectedJob = { ...job };
    this.jobTitle = job.title;
    this.jobDescription = '';
    this.salary = '';
    this.frequency = '';
    this.type = '';
    this.currency = '';
    this.location = '';
    this.showModal = true;
  }


  saveJobChanges(form: any) {
    if (form.valid) {
      if (this.selectedJob) {
        const index = this.jobPostings.findIndex(job => job.id === this.selectedJob.id);
        if (index !== -1) {
          this.jobPostings[index].title = this.jobTitle;
          this.updateStatistics();
        }
        alert('Job updated successfully!');
      }
      this.closeModal();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }


  closeModal() {
    this.showModal = false;
    this.selectedJob = null;
    this.resetForm();
  }


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
    this.requirements = { bachelor: false, master: false, phd: false, certification: false };
    this.numOfEnteredWord = 0;
    this.companyLogo = null;
    this.relatedDocuments = null;
  }


  deleteJob(jobId: number) {
    this.jobPostings = this.jobPostings.filter(job => job.id !== jobId);
    this.updateStatistics();
  }


  onStatusChange(job: any) {
    this.updateStatistics();
  }


  updateApplicationStatus(application: any, newStatus: string) {
    application.status = newStatus;
  }


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
}
