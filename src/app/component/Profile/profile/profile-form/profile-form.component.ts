import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ProfileFormComponent {
  // These should match your form inputs
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  country = '';
  city = '';
  summary = '';
  resumeFile: File | null = null;

  onFileSelected(event: any) {
    this.resumeFile = event.target.files[0] || null;
  }

  getFormData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      country: this.country,
      city: this.city,
      summary: this.summary,
      resumeFile: this.resumeFile ? this.resumeFile.name : null,
    };
  }

  saveProfile() {
    Swal.fire({
      title: 'Saving...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Saved!',
        text: 'Your profile has been updated successfully.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    }, 1500);
  }
}
