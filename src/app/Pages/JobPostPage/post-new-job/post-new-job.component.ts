import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-post-new-job',
  templateUrl: './post-new-job.component.html',
  styleUrl: './post-new-job.component.css',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgIf,
    NgForOf
  ]
})
export class PostNewJobComponent {
  isChecked: boolean = false;

  jobTitle: string = '';
  jobDescription: string = '';
  customRequirement: string = '';
  salary: string = '';
  frequency: string = '';
  type: string = '';
  currency: string = '';
  location: string = '';
  jobType: string = '';

  numOfEnteredWord: number = 0;
  maxWords: number = 500;

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

  onSubmit(form: any) {
    if (form.valid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  onLogoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Logo file selected:', file.name);
    }
  }

  onDocSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Document file selected:', file.name);
    }
  }
}
