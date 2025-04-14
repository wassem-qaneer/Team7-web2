import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent,RouterModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'team7-web2';
}

