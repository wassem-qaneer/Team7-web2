import { Component } from '@angular/core';

@Component({
  selector: 'app-error-404',
  standalone: true,
  template: `
    <div class="wrapper">
      <div class="error-container">
        <h1 class="error-title">404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button (click)="goToHomepage()">Go to Homepage</button>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9f6ff;
    }

    .error-container {
      text-align: center;
      background-color: white;
      padding: 3rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(133, 105, 183, 0.2);
      width: 80%;
      max-width: 900px;
    }

    .error-title {
      font-size: 180px;
      color: #8e24aa;
      margin: 0;
    }

    .error-container h2 {
      font-size: 36px;
      color: #6a1b9a;
      margin-bottom: 20px;
    }

    .error-container p {
      color: #333;
      font-size: 20px;
    }

    button {
      background-color: #8e24aa;
      color: white;
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
    }

    button:hover {
      background-color: #6a1b9a;
    }
  `]
})
export class Error404Component {
  goToHomepage() {
    window.location.href = '/';
  }
}
