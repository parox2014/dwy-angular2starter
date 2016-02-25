import {Component,Output,Input,EventEmitter,ElementRef,Renderer} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Todo} from '../interfaces/todo';
import {AnimationComponent} from '../AnimationComponent';

@Component({
  selector:'todo-item',
  directives: [ROUTER_DIRECTIVES],
  host:{
    'class':'list-group-item clearfix',
    '[id]':'todo.ID'
  },
  template:`
    <div class="col-md-1">
        <input type="checkbox" [(ngModel)]="todo.done" (change)="onChange($event)">
      </div>

      <div class="col-md-3">
        <a [routerLink]="['TodoDetail',{id:todo.ID}]">
          <strong>{{todo.name}}</strong>
        </a>
      </div>

      <div class="col-md-2">
        <span>{{todo.createAt|myDate}}</span>
      </div>

      <div class="col-md-2 col-md-offset-4">
        <button class="btn btn-danger btn-xs" (click)="onRemoveBtnClick()">remove</button>
      </div>
  `
})

export class TodoItem extends AnimationComponent{

  @Input() todo:Todo;
  @Input() animation:string;
  @Input() direction:string;
  @Input() delay:string;


  @Output() toggleDone=new EventEmitter();
  @Output() remove=new EventEmitter();
  constructor(public elRef:ElementRef,public renderer:Renderer){
    super(elRef,renderer);
  }
  onChange(e:any){
    this.todo.done=e.target.checked;
    this.toggleDone.emit(this.todo);
  }

  onRemoveBtnClick(){
    this.remove.emit(this.todo.ID);
  }
}