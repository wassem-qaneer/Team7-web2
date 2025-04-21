import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ProfileFormComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild(ProfileFormComponent) profileForm!: ProfileFormComponent;
  @ViewChild(ExperienceSectionComponent) experienceSection!: ExperienceSectionComponent;
  @ViewChild(EducationSectionComponent) educationSection!: EducationSectionComponent;
  @ViewChild(SkillsSectionComponent) skillsSection!: SkillsSectionComponent;

  saveProfile() {
    const profileInfo = this.profileForm?.getFormData?.();
    const experiences = this.experienceSection?.experiences || [];
    const education = this.educationSection?.educationList || [];
    const skills = this.skillsSection?.skills || [];

    const fullProfile = {
      ...profileInfo,
      experiences,
      education,
      skills
    };

    console.log('Saving profile:', fullProfile);

    this.profileForm.saveProfile();
  }
}