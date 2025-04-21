import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { path: '/job-seekers', label: 'Job Seekers' },
    { path: '/add-job', label: 'Add Job' },
    { path: '/edit-job', label: 'Edit Job' },
    { path: '/job-id', label: 'Job ID' },
    { path: '/salary-range', label: 'Salary Range' },
    { path: '/admin-messages', label: 'Admin Messaging' }
  ];
}