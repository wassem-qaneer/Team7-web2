import { Component, afterNextRender } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-job-chart',
  standalone: true,
  templateUrl: './job-chart.component.html',
  styleUrls: ['./job-chart.component.css']
})
export class JobChartComponent {
  constructor() {
    afterNextRender(() => {
      this.createChart();
    });
  }

  private createChart(): void {
    const ctx = document.getElementById('jobPostingsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Job Postings',
          data: [10, 8, 6, 4, 2, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}