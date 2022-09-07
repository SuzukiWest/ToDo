import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, tasks } from '../tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task: Task | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //1.Determine task ID
    const routeP = this.route.snapshot.paramMap; //take route params
    const taskID = Number(routeP.get('productId'));

    //2.Find task by ID
    this.task = tasks.find((task) => task.id === taskID);
  }
}
