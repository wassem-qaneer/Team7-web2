import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [FormsModule,RouterModule]
})
export class FooterComponent {
  @Input() links = [
    { label: 'Pricing', url: '#' },
    { label: 'About us', url: '#' },
    { label: 'Features', url: '#' },
    { label: 'Help Center', url: '#' },
    { label: 'Contact us', url: '#' },
    { label: 'FAQs', url: '#' },
    { label: 'Careers', url: '#' }
  ];

  @Input() brandName = 'JobScribe';

  email: string = '';
  language: string = '';
  languages = ['English', 'Arabic', 'French', 'Spanish', 'German', 'Chinese', 'Japanese', 'Russian'];

  socialIcons = [
    { class: 'fab fa-twitter', url: '#' },
    { class: 'fab fa-facebook', url: '#' },
    { class: 'fab fa-linkedin', url: '#' },
    { class: 'fab fa-youtube', url: '#' }
  ];

  subscribe() {
    if (this.email) {
      alert(`Subscribed with: ${this.email}`);
      this.email = '';
    }
  }
}
