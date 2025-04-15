import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Notification {
  id: number;
  localTime: string;
  person: string;
  company: string;
  title: string;
  selected?: boolean; 
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  selectAllChecked = false;

  notifications: Notification[] = [
    {
      id: 1,
      localTime: 'Sep 30, 2021 11:20:32 PM',
      person: 'John Doe',
      company: 'ABC Corp',
      title: 'Connector cvaddemo-con1.cvaddemo.com has been offline for 3 or more hours.'
    },
    {
      id: 2,
      localTime: 'Sep 23, 2021 2:20:21 PM',
      person: 'Jane Smith',
      company: 'XYZ Inc',
      title: 'Connector cvaddemo-con1.cvaddemo.com has been offline for 2 or more hours.'
    },
    {
      id: 3,
      localTime: 'Sep 14, 2021 12:47:04 PM',
      person: 'Ahmed Ali',
      company: 'TechSoft',
      title: 'Connector cvaddemo-con1.cvaddemo.com has been offline for 2 or more hours.'
    },
    {
      id: 4,
      localTime: 'Sep 13, 2021 10:01:47 PM',
      person: 'Emily Johnson',
      company: 'NetGroup',
      title: 'Connector cvaddemo-con1.cvaddemo.com has been offline for 3 or more hours.'
    },
    {
      id: 5,
      localTime: 'Sep 7, 2021 7:01:48 PM',
      person: 'Mohamed Khaled',
      company: 'InfoWave',
      title: 'Connector cvaddemo-con1.cvaddemo.com has been offline for 3 or more hours.'
    }
  ];

  dismissAll() {
    this.notifications = [];
  }

  dismissOne(id: number) {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }

  dismissSelected() {
    this.notifications = this.notifications.filter(n => !n.selected);
    this.selectAllChecked = false;
  }

  toggleSelectAll() {
    this.notifications.forEach(n => n.selected = this.selectAllChecked);
  }
}
