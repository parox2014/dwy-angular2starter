import {Component,Output,Input,EventEmitter} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Todo} from '../interfaces/todo';
import {MyDate} from '../pipes/datePipe';

@Component({
  selector:'todo-item',
  //inputs:['todo'],
  pipes:[MyDate],
  directives: [ROUTER_DIRECTIVES],
  template:`
    <li [id]="todo.ID" class="clearfix">
      <div class="col-md-1">
        <input type="checkbox" [(ngModel)]="todo.done" (change)="onChange($event)">
      </div>

      <div class="col-md-3">
        <!--<a href="javascript:;" (click)="onTodoNameClick()">-->
          <!--<strong>{{todo.name}}</strong>-->
        <!--</a>-->

        <a [routerLink]="['TodoDetail',{id:todo.ID}]">
          <strong>{{todo.name}}</strong>
        </a>
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

  @Input() todo:Todo;

  @Output() toggleDone=new EventEmitter();
  @Output() remove=new EventEmitter();
  constructor(){}
  onChange(e:any){
    this.todo.done=e.target.checked;
    this.toggleDone.emit(this.todo);
  }

  onRemoveBtnClick(){
    this.remove.emit(this.todo.ID);
  }
}