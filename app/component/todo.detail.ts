import {Component} from 'angular2/core';
import {Router,RouteParams,ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoService} from '../services/TodoService';
import {Todo} from '../interfaces/todo';
import {MyDate} from '../pipes/datePipe';

@Component({
  selector: 'todo-detail',
  providers: [TodoService],
  pipes: [MyDate],
  directives:[ROUTER_DIRECTIVES],
  template: `
    <div class="panel panel-default" [class.panel-success]="todo.done">
      <div class="panel-heading clearfix">
        <div class="col-md-4">
          <h4>Todo Detail</h4>
        </div>

        <div class="col-md-8">
          <a class="btn btn-success" [routerLink]="['Todo']">Return to todo list</a>
        </div>
      </div>
      <div class="panel-body">
        <ul class="list-group">
          <li class="list-group-item list-group-item-text">
            <span>Todo Name:</span>
            <strong>{{todo.name}}</strong>
          </li>
          <li class="list-group-item list-group-item-text">
            <span>Create At:</span>
            <strong>{{todo.createAt|myDate}}</strong>
          </li>
          <li class="list-group-item list-group-item-text">
            <span>Update At:</span>
            <strong>{{todo.updateAt|myDate}}</strong>
          </li>
        </ul>
      </div>
    </div>
    `
})

export class TodoDetail {
  todo:Todo;
  router:Router;
  routeParams:RouteParams;
  todoService:TodoService;

  constructor(router:Router, routeParams:RouteParams, todoService:TodoService) {
    this.router = router;
    this.routeParams = routeParams;
    this.todoService = todoService;
  }

  ngOnInit() {
    var id:number = Number(this.routeParams.get('id'));
    this.todo = this.todoService.query({ID: id})[0];
  }
}