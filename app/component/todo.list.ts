import {Component} from 'angular2/core';
import {TodoItem} from './todo.item';
import {Todo} from '../interfaces/todo';
import {TodoService} from '../services/todoService';
import {TodoForm} from './todo.form';
@Component({
  selector: 'todo-list',
  directives: [TodoItem,TodoForm],
  providers: [TodoService],
  template: `
    <div>
      <todo-form [onSubmit]="onSubmit"></todo-form>
      <ul class="list-unstyled">
        <todo-item *ngFor="#todo of todoList" [todo]="todo">

        </todo-item>
      </ul>
    </div>
  `
})

export class TodoList {
  public todoList:Array<Todo>;
  ts:TodoService;

  constructor(todoService:TodoService) {
    this.ts = todoService;
  }

  ngOnInit() {
    this.ts.query(res=> {
        this.todoList = res;
      });
  }

}
