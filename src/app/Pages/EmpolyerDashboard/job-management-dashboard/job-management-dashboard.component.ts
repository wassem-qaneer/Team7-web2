import { Component } from '@angular/core';
import {CardsComponent} from './cards/cards.component';
import {JopPostingTableComponent} from './jop-posting-table/jop-posting-table.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-job-management-dashboard',
  templateUrl: './job-management-dashboard.component.html',
  imports: [
    CardsComponent,
    JopPostingTableComponent,
    NgOptimizedImage
  ],
  styleUrl: './job-management-dashboard.component.css'
})
export class JobManagementDashboardComponent {

  cards = [
    {
      image: 'assests/pic1.png',
      title: 'UX Designer',
      status: 'Open',
      applications: 25
    },
    {
      image: 'assests/pic2.webp',
      title: 'Project Manager',
      status: 'Closed',
      applications: 45
    },
    {
      image: 'assests/pic3.webp',
      title: 'Web Developer',
      status: 'Closed',
      applications: 30
    },
    {
      image: 'assests/pic4.webp',
      title: 'Data Analyst',
      status: 'Open',
      applications: 15
    }
  ];

}
