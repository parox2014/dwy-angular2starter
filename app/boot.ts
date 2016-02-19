import {bootstrap} from 'angular2/platform/browser'

import {Inject,Component} from 'angular2/core';
import {LocationStrategy,RouteConfig,Router,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

import {TodoList} from './todo/todo.list';
import {TodoDetail} from './todo/todo.detail';
import {ProfileForm} from './form/profile.form';


@Component({
  selector: "angular2-demo",
  providers:[HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  template: `
  <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a href="#/">
              {{title}}
            </a>
          </div>
        </div>

        <ul class="nav navbar-nav">
          <li *ngFor="#nav of navList">
            <a [routerLink]="[nav]">{{nav}}</a>
          </li>
        </ul>
      </div>
    </nav>
  <div class="container">
    <!--声明路由出口-->
    <router-outlet></router-outlet>
  </div>
	`
})

@RouteConfig([
  {path: "/todo", component: TodoList, name: "Todo", useAsDefault: true},
  {path: "/todo/:id", component: TodoDetail, name: "TodoDetail"},
  {path: "/profile-form", component: ProfileForm, name: "ProfileForm"}
])

class Angular2Demo {
  private title:string;
  public router:Router;
  locationStrategy:LocationStrategy;
  navList:Array<string>;
  constructor(@Inject(Router) rt, @Inject(LocationStrategy) ls) {
    this.title = 'Angular2 Demo';
    this.router = rt;
    this.locationStrategy=ls;
    this.navList=['Todo','ProfileForm'];
  }
}

bootstrap(Angular2Demo, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);