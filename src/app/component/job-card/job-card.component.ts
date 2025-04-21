import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job!: {
    title: string;
    company: string;
    date: string;
    status: 'Accepted' | 'Pending' | 'Rejected';
    image: string;
  };
}
