import { Component } from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {JopPostingTableComponent} from './jop-posting-table/jop-posting-table.component';

@Component({
  selector: 'app-manage-jop-posting',
  imports: [
    SideBarComponent,
    JopPostingTableComponent
  ],
  templateUrl: './manage-jop-posting.component.html',
  styleUrl: './manage-jop-posting.component.css'
})
export class ManageJopPostingComponent {

}
