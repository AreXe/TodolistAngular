import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneTasksList: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<string>) => {
      this.doneTasksList = tasks;
    });
  }

  ngOnInit() {
  }

}
