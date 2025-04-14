import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employer-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent {
  countries = ['Palestine', 'Jordan', 'Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Iraq'];
  cities = ['Nablus', 'Ramallah and Al-Bireh', 'Hebron', 'Bethlehem', 'Jerusalem', 'Tulkarm', 'Qalqilya', 'Salfit', 'Jenin', 'Jericho', 'Tubas', 'Gaza', 'Rafah', 'Khan Younis', 'Deir al-Balah', 'North Gaza'];
  companyTypes = ['Company', 'Institution', 'Association'];
  companySectors = ['Technology', 'Health', 'Education', 'Trade', 'Services'];
  companySizes = ['Small', 'Medium', 'Large'];

  account = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
    preferredLanguage: 'Arabic',
    companyName: '',
    country: '',
    city: '',
    type: '',
    sector: '',
    size: '',
    logo: null,
  };

  onSubmit() {
    console.log(this.account);
  }
}
