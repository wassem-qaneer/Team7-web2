import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
  skills: string[] = [];

  // Add method to return skills
  getSkills() {
    return this.skills;
  }
}
