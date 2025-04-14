import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-post-new-job',
  templateUrl: './post-new-job.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrl: './post-new-job.component.css'
})
export class PostNewJobComponent {
  isChecked: boolean = false;



  jobDescription: string = '';
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

}
