import {Component,ElementRef} from 'angular2/core';
import {TodoItem} from './todo.item';
import {Todo} from '../interfaces/todo';
import {TodoService} from '../services/TodoService';
import {TodoForm} from './todo.form';
import {TodoFilter} from './todo.filter';
import {Dialog} from '../modal/modal';

@Component({
  selector: 'todo-list',
  directives: [TodoItem, TodoForm, TodoFilter],
  providers:[Dialog],
  host: {
    'style': 'display:block'
  },
  template: `
  <todo-form (formSubmit)="createTodo($event)"></todo-form>
  <div style="margin-bottom: 20px;" todo-filter="All" (filterChange)="onFilterChange($event)"></div>

  <hr>
  <ul *ngIf="todoList.length>0" class="list-unstyled list-group">
    <todo-item *ngFor="#todo of todoList,#i=index"
    (toggleDone)="onToggleDone($event)"
    (remove)="onRemove($event)"
    [animation]="'slide'"
    [direction]="'leftToRight'"
    [delay]="i*50"
    [ngClass]="{'list-group-item-success':todo.done}"
    [todo]="todo">
    </todo-item>
  </ul>
  <h4 class="text-center" *ngIf="todoList.length===0">Have not todo,plesae create todo first</h4>
  `
})

export class TodoList {
  todoList:Array<Todo> = [];
  currentFilter = 'All';

  //如果前面加了private 或者public修饰，该属性或自动成为类的成员
  constructor(private todoService:TodoService, private dialog:Dialog) {
  }

  ngOnInit() {
    this.query();
  }

  query() {
    this.queryListByFilter(this.currentFilter)
      .subscribe((todos:Array<Todo>)=> {
        this.todoList = todos;
      });
  }

  createTodo(todo:Todo) {
    this.todoService.save(todo);
    this.query();
  }

  onToggleDone(todo:Todo) {
    this.todoService.toggleDone(todo);
    if (this.currentFilter !== 'All') {
      this.query();
    }
  }

  onRemove(id:number) {
    this.dialog.open('Are you sure to remove this todo?')
      .subscribe(sure=> {
        if(sure){
          this.todoService.removeById(id);
          this.query();
        }
      });

  }

  onFilterChange(filter:any) {
    this.currentFilter = filter.name;
    this.query();
  }

  queryListByFilter(name:string) {
    var param = {done: null};

    if (name === 'Done') {
      param.done = true;
    } else if (name === 'Undone') {
      param.done = false;
    } else {
      param = null;
    }
    return this.todoService.query(param);
  }
}
