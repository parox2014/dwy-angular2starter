import {Component,Output,EventEmitter} from 'angular2/core';
import {Todo} from '../interfaces/todo';
import {MyDate} from '../pipes/datePipe';

@Component({
  selector:'todo-item',
  inputs:['todo'],
  pipes:[MyDate],
  template:`
    <li [id]="todo.ID" class="clearfix">
      <div class="col-md-1">
        <input type="checkbox" [(ngModel)]="todo.done" (change)="onChange($event)">
      </div>

      <div class="col-md-3">
        <strong>{{todo.name}}</strong>
      </div>

      <div class="col-md-2">
        <span>{{todo.createAt|myDate}}</span>
      </div>

      <div class="col-md-2">
        <button class="btn btn-danger btn-xs" (click)="onRemoveBtnClick()">remove</button>
      </div>

    </li>
  `
})

export class TodoItem{
  public todo:Todo;

  @Output() toggleDone=new EventEmitter();
  @Output() remove=new EventEmitter();
  constructor(){
  }
  onChange(e:any){
    this.todo.done=e.target.checked
    this.toggleDone.emit(this.todo);
  }

  onRemoveBtnClick(){
    this.remove.emit(this.todo.ID);
  }
}