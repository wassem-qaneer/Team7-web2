import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-seeker-register',
  standalone: true,
  templateUrl: './job-seeker-register.component.html',
  styleUrls: ['./job-seeker-register.component.css'],
  imports: [CommonModule, FormsModule,RouterModule]
})
export class JobSeekerRegisterComponent{

  selectedDay: number | undefined;
  selectedMonth: number | undefined;
  selectedYear: number | undefined;

  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = Array.from({ length: 12 }, (_, i) => i + 1);
  years = Array.from({ length: 100 }, (_, i) => 2025 - i);
}
