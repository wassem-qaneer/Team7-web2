import { Component } from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';

@Component({
  selector: 'app-manage-users',
  imports: [
    SideBarComponent
  ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

}
