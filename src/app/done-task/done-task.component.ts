import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneTasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<Task>) => {
      this.doneTasksList = tasks;
    });
  }

  ngOnInit() {
  }

}
