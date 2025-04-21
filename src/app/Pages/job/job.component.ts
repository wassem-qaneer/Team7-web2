import { Component } from '@angular/core';
import {MySaveJobComponent} from '../../component/my-save-job/my-save-job.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-job',
  imports: [
    RouterModule,MySaveJobComponent
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

}
