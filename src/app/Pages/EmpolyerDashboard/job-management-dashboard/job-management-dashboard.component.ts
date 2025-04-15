import { Component } from '@angular/core';
import {CardsComponent} from './cards/cards.component';
import {JopPostingTableComponent} from './jop-posting-table/jop-posting-table.component';

@Component({
  selector: 'app-job-management-dashboard',
  templateUrl: './job-management-dashboard.component.html',
  imports: [
    CardsComponent,
    JopPostingTableComponent
  ],
  styleUrl: './job-management-dashboard.component.css'
})
export class JobManagementDashboardComponent {

}
