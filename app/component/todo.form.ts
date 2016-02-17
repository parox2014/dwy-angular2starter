import {Component} from 'angular2/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from "angular2/common";
import {Todo} from '../interfaces/todo';
import {TodoService} from '../services/todoService';
@Component({
  selector:'todo-form',
  directives:[CORE_DIRECTIVES,FORM_DIRECTIVES],
  inputs:['onSubmit'],
  template:`
    <form #f="ngForm" (submit)="onFormSubmit($event,f.value)">
      <div class="form-group">
        <input class="form-control" ngControl="name">
      </div>
    <form>
  `
})

export class TodoForm{
  public onSubmit:Function;
  ts:TodoService;
  constructor(ts:TodoService){
    this.ts=ts;
  }
  onFormSubmit(e,param){
    e.preventDefault();

    var todo:Todo=Object.assign({
      done:false,
      id:Math.floor(100*Math.random())
    },param);
    this.ts.add(todo);
  }
}