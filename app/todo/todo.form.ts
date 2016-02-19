import {Component,Output,EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from "angular2/common";
import {Todo} from '../interfaces/todo';

@Component({
  selector:'todo-form',
  directives:[CORE_DIRECTIVES,FORM_DIRECTIVES],
  template:`
    <form #f="ngForm" (submit)="onFormSubmit($event,f.value)">
      <div class="form-group">
        <input class="form-control" ngControl="name" autofocus>
      </div>
    <form>
  `
})

export class TodoForm{

  @Output() formSubmit = new EventEmitter();

  constructor(){

  }
  onFormSubmit(e:any,param:any){
    e.preventDefault();
    e.target.reset();

    var todo:Todo=Object.assign({
      done:false
    },param);

    this.formSubmit.emit(todo);
  }
}