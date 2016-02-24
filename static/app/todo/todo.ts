import {Component} from 'angular2/core';
import {Router,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoList} from "./todo.list";
import {TodoDetail} from "./todo.detail";


@Component({
  selector:'todo',
  directives:[ROUTER_DIRECTIVES],
  template:`
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>{{title}}</h4>
      </div>

      <div class="panel-body">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

@RouteConfig([
  {name:'Todo',path:'/',component:TodoList,useAsDefault:true},
  {name:'TodoDetail',path:'/:id',component:TodoDetail}
])

export class TodoComponent{
  private title='My Todo';
}