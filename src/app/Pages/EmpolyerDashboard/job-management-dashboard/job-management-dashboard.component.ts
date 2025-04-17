import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // For ngModel in the template
import { NgClass, NgForOf, NgIf } from '@angular/common'; // Add these imports for form directives

@Component({
  selector: 'app-job-management-dashboard',
  templateUrl: './job-management-dashboard.component.html',
  styleUrls: ['./job-management-dashboard.component.css'],
  standalone: true,
  imports: [CardsComponent, RouterLink, FormsModule, NgClass, NgForOf, NgIf], // Add missing imports
})
export class JobManagementDashboardComponent implements OnInit {
  // Job Postings Data
  jobPostings = [
    { id: 1, title: 'Software Engineer', company: 'Tech Solutions', status: 'Open' },
    { id: 2, title: 'Marketing Manager', company: 'Brand Boosters', status: 'Open' },
    { id: 3, title: 'Data Analyst', company: 'Data Gurus', status: 'Open' },
    { id: 4, title: 'Product Manager', company: 'Innovate Inc.', status: 'Open' },
    { id: 5, title: 'Web Developer', company: 'Code Crew', status: 'Open' },
  ];

  // Applications Data
  applications = [
    { applicantName: 'John Doe', position: 'Software Engineer', status: 'Rejected' },
    { applicantName: 'Jane Smith', position: 'Data Analyst', status: 'Accepted' },
    { applicantName: 'Alice Johnson', position: 'Graphic Designer', status: 'Accepted' },
  ];

  // Statistics
  totalJobs: number = 0;
  openJobs: number = 0;
  closedJobs: number = 0;

  // Modal Data
  selectedJob: any = null;
  showModal: boolean = false;

  // Form Data for Modal (matching PostNewJobComponent)
  jobTitle: string = '';
  jobDescription: string = '';
  customRequirement: string = '';
  salary: string = '';
  frequency: string = '';
  type: string = '';
  currency: string = '';
  location: string = '';
  isChecked: boolean = false; // For "Major in related field" toggle
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
    this.updateStatistics(); // Initialize statistics on component load
  }

  // Update statistics based on job postings
  updateStatistics() {
    this.totalJobs = this.jobPostings.length;
    this.openJobs = this.jobPostings.filter(job => job.status === 'Open').length;
    this.closedJobs = this.jobPostings.filter(job => job.status === 'Close').length;
  }

  // Count words in job description
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

  // Open the modal with the selected job's data
  openEditModal(job: any) {
    this.selectedJob = { ...job }; // Create a copy to avoid direct mutation
    this.jobTitle = job.title;
    this.jobDescription = ''; // You can fetch this from a backend if available
    this.salary = '';
    this.frequency = '';
    this.type = '';
    this.currency = '';
    this.location = '';
    this.showModal = true;
  }

  // Save changes from the modal
  saveJobChanges(form: any) {
    if (form.valid) {
      if (this.selectedJob) {
        const index = this.jobPostings.findIndex(job => job.id === this.selectedJob.id);
        if (index !== -1) {
          this.jobPostings[index].title = this.jobTitle;
          // Update other fields as needed (e.g., description, salary, etc.)
          this.updateStatistics();
        }
        alert('Job updated successfully!');
      }
      this.closeModal();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
    this.selectedJob = null;
    this.resetForm();
  }

  // Reset form fields
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

  // Delete a job posting
  deleteJob(jobId: number) {
    this.jobPostings = this.jobPostings.filter(job => job.id !== jobId);
    this.updateStatistics();
  }

  // Update job status and statistics
  onStatusChange(job: any) {
    this.updateStatistics();
  }

  // Update application status
  updateApplicationStatus(application: any, newStatus: string) {
    application.status = newStatus;
  }

  // Handle file uploads
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
