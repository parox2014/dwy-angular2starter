import {Component} from 'angular2/core';
import {Todo} from '../interfaces/todo';
import {MyDate} from '../pipes/datePipe';
import {TodoService} from '../services/TodoService';

@Component({
  selector:'todo-item',
  inputs:['todo'],
  pipes:[MyDate],
  providers: [TodoService],
  template:`
    <li [id]="todo.ID">
      <input type="checkbox" [(ngModel)]="todo.done" (change)="onChange($event)">
      <span>{{todo.name}}</span>
      <span>{{todo.createAt|myDate}}</span>
      <span>{{todo.done}}</span>
    </li>
  `
})

export class TodoItem{
  public todo:Todo;
  private _todoService:TodoService;
  private todoState:Object;
  constructor(ts:TodoService){
    this._todoService=ts;

  }
  onChange(e:any){
    this.todo.done=e.target.checked;
    this._todoService.toggleDone(this.todo);
  }
}