import {Component} from 'angular2/core';

import {Todo} from '../interfaces/todo'

@Component({
  selector:'todo-item',
  inputs:['todo'],
  template:`
    <li [id]="todo.id">
      <input type="checkbox" [(ngModel)]="todo.done">
      <span>{{todo.name}}</span>
      <span>{{todo.createAt}}</span>
      <span>{{todo.done}}</span>
    </li>
  `
})

export class TodoItem{
  public todo:Todo;
  constructor(){

  }
}