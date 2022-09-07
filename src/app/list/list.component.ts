import { Component } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  tasks = tasks;

  //Interaction with list as a whole / action of buttons
}
