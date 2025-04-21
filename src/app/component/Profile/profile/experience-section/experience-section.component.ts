import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
  experiences = [
    {
      company: 'OpenAI',
      role: 'AI Engineer',
      start: 'Jan 2022',
      end: 'Present',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DrfIQnE5gOFb4TvObahiZg.jpeg'
    },
    {
      company: 'Google',
      role: 'Software Engineer',
      start: 'Jun 2020',
      end: 'Dec 2021',
      image: 'https://pbs.twimg.com/media/Fgu2wFcX0AAdJQJ?format=jpg&name=4096x4096'
    }
  ];

  getExperiences() {
    return this.experiences;
  }
}
