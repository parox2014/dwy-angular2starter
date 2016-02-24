import {Component} from 'angular2/core';
import {Router,RouteParams,ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoService} from '../services/TodoService';
import {Todo} from '../interfaces/todo';

@Component({
  selector: 'todo-detail',
  providers: [TodoService],
  directives: [ROUTER_DIRECTIVES],
  template: `

      <h1>{{todo.name}}</h1>
      <ul class="list-group">
      <li class="list-group-item list-group-item-text">
        <span>Create At:</span>
        <strong>{{todo.createAt|myDate}}</strong>
      </li>
      <li class="list-group-item list-group-item-text">
        <span>Update At:</span>
        <strong>{{todo.updateAt|myDate}}</strong>
      </li>
      </ul>

      <div>
        <button class="btn btn-default btn-block"
          (click)="onDoneBtnClick()"
          [class.btn-success]="todo.done">
          {{todo.done?'Restart':'Done'}}
         </button>
      </div>

    `
})

export class TodoDetail {
  todo:Todo={};

  constructor(private router:Router,
              private routeParams:RouteParams,
              private todoService:TodoService) {
  }

  ngOnInit() {
    var id:number = Number(this.routeParams.get('id'));

    this.todoService.getById(id)
      .subscribe((todo:Todo)=> {
        this.todo = todo;
      });
  }

  onDoneBtnClick() {
    let todo:Todo = this.todo;
    todo.done = !todo.done;
    this.todoService.toggleDone(todo);
  }
}