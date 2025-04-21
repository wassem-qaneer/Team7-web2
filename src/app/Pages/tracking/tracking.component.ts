import { Component } from '@angular/core';
import {ApplicationTrackingComponent} from '../../component/application-tracking/application-tracking.component';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-tracking',
  imports: [
    RouterModule,ApplicationTrackingComponent
  ],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {

}
