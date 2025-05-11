import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  image: string = 'https://railsware.com/images/team/careers/social/hiring-senior-product-designer-role-2-590ae00e.jpg';
  title: string = 'Senior Product Designer';
  company: string = 'Remotely - Full Time';

 
  cvFile: File | null = null;
  coverLetterFile: File | null = null;
  applicationSubmitted = false;

  onFileSelected(event: Event, type: 'cv' | 'cover') {
    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      if (type === 'cv') {
        this.cvFile = target.files[0];
      } else {
        this.coverLetterFile = target.files[0];
      }
    }
  }

  apply() {
    if (this.cvFile && this.coverLetterFile) {
      this.applicationSubmitted = true;
    } else {
      alert('Please upload both CV and Cover Letter!');
    }
  }
}
