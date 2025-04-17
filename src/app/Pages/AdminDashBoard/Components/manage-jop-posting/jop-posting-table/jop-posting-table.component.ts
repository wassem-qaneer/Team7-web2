import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-jop-posting-table',
  templateUrl: './jop-posting-table.component.html',
  styleUrls: ['./jop-posting-table.component.css'],
  standalone: true,
  imports: [RouterLink, FormsModule, NgForOf],
})
export class JopPostingTableComponent implements OnInit {
  // Job Postings Data with Employee Name
  jobPostings = [
    { id: 1, title: 'Software Engineer', company: 'Tech Solutions', employeeName: 'John Doe', status: 'Open' },
    { id: 2, title: 'Marketing Manager', company: 'Brand Boosters', employeeName: 'Jane Smith', status: 'Open' },
    { id: 3, title: 'Data Analyst', company: 'Data Gurus', employeeName: 'Alice Johnson', status: 'Open' },
    { id: 4, title: 'Product Manager', company: 'Innovate Inc.', employeeName: 'Bob Brown', status: 'Open' },
    { id: 5, title: 'Web Developer', company: 'Code Crew', employeeName: 'Emily Davis', status: 'Open' },
  ];

  // Filtered Job Postings (for search)
  filteredJobPostings = [...this.jobPostings];

  // Search Input
  searchEmployee: string = '';

  ngOnInit() {
    this.filteredJobPostings = [...this.jobPostings];
  }

  // Filter job postings by employee name
  filterJobs() {
    if (!this.searchEmployee.trim()) {
      this.filteredJobPostings = [...this.jobPostings];
    } else {
      this.filteredJobPostings = this.jobPostings.filter(job =>
        job.employeeName.toLowerCase().includes(this.searchEmployee.toLowerCase())
      );
    }
  }

  // Delete a job posting
  deleteJob(jobId: number) {
    this.jobPostings = this.jobPostings.filter(job => job.id !== jobId);
    this.filterJobs(); // Refresh filtered list after deletion
  }
}
