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
        <input class="form-control" ngControl="name" autofocus>
      </div>
    <form>
  `
})

export class TodoForm{
  public onSubmit:Function;
  todo:TodoService;
  constructor(todo:TodoService){
    this.todo=todo;
  }
  onFormSubmit(e,param){
    e.preventDefault();
    e.target.reset();
    var todo:Todo=Object.assign({
      done:false
    },param);
    this.todo.save(todo);
  }

  reverse(str){
    var len=str.length;
    var result='';
    while (len>0){
      result+=str.charAt(len);
      len--
    }
  }
}