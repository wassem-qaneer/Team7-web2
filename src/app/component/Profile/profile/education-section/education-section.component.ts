import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationCardComponent } from '../education-card/education-card.component';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, EducationCardComponent],
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {
  educationList = [
    { degree: 'Master of Science', field: 'Computer Science', school: 'Stanford', year: '2018-2020' }
    
  ];

  getEducation() {
    return this.educationList;
  }
}
