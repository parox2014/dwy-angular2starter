import {Component,Output,EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES,ControlGroup,Control,AbstractControl} from "angular2/common";
import {Todo} from '../interfaces/todo';
import {AutoFocus,AutoSelect} from '../directives/directives';

class TodoModel implements Todo{
  public done:boolean=false;
  constructor(todo:Object){
    Object.assign(this,todo);
  }
}

@Component({
  selector:'todo-form',
  directives:[COMMON_DIRECTIVES,AutoFocus,AutoSelect],
  template:`
    <form [ngFormModel]="formModel" (submit)="onFormSubmit($event)" novalidate>
      <div class="input-group">
        <input type="text" required class="form-control" ngControl="name" auto-focus auto-select>
        <span class="input-group-btn">
         <button class="btn btn-success" type="submit" [disabled]="!formModel.valid">Create</button>
        </span>
      </div>
      <div class="alert alert-danger" *ngIf="formModel.controls['name'].hasError('required')">
        Todo name required
      </div>
    <form>
  `
})

export class TodoForm{

  @Output() formSubmit = new EventEmitter();

  formModel:AbstractControl;
  constructor(){
    this.formModel=new ControlGroup({
      name:new Control('example')
    });
  }
  onFormSubmit(e:any){
    e.target.reset();

    if(!this.formModel.value.name){
      return;
    }
    var todo:Todo=new TodoModel(this.formModel.value);

    this.formSubmit.emit(todo);
  }
}