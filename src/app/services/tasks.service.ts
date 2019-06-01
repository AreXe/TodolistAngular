import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../model/task';

@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];
  private doneTasksList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'Example task 1', created: new Date()},
      {name: 'Example task 2', created: new Date()},
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.doneTasksList.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.doneTasksList);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
