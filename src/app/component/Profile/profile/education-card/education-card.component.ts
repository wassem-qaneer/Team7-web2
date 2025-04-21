import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  @Input() education: any = {
    degree: 'Master of Science',
    school: 'Columbia University',
    period: '2018 - 2020',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_Master%27s_Degree.jpg/1024px-Columbia_University_Master%27s_Degree.jpg'
  };
  ;
  
}
