import {Component,ElementRef,OnDestroy,AfterContentInit,Renderer} from 'angular2/core';
import {Router,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoList} from "./todo.list";
import {TodoDetail} from "./todo.detail";
import {AnimationComponent} from '../AnimationComponent';

@Component({
  selector: 'todo',
  directives: [ROUTER_DIRECTIVES],
  host: {
    'class': 'panel panel-default',
    'style': 'display:block'
  },
  template: `
    <div class="panel-heading">
      <h4>{{title}}</h4>
    </div>

    <div class="panel-body">
      <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([
  {name: 'Todo', path: '/', component: TodoList, useAsDefault: true},
  {name: 'TodoDetail', path: '/:id', component: TodoDetail}
])


export class TodoComponent extends AnimationComponent {
  private title = 'My Todo';
  public animation:string='slide';
  public direction:string='leftToRight';
  constructor(public elRef:ElementRef, public renderer:Renderer) {
    super(elRef, renderer);
  }

}