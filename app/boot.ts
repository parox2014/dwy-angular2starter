import {bootstrap} from 'angular2/platform/browser'
import {TodoList} from './component/todo.list';
import {Inject,Component} from 'angular2/core';
import {LocationStrategy,RouteConfig,Router,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";


@Component({
  selector: 'angular2-form',
  template: `
    <h1>angular2 form</h1>
  `
})

class Angular2Form {
}


@Component({
  selector: "angular2-demo",
  directives: [ROUTER_DIRECTIVES],
  template: `
  <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a href="#">
              {{title}}
            </a>
          </div>
        </div>

        <ul class="nav navbar-nav">
          <li *ngFor="#nav of navList" [class.active]="isCurrent(nav)">
            <a [routerLink]="[nav]">{{nav}}</a>
          </li>
        </ul>
      </div>
    </nav>
  <div class="container-fluid">
    <!--声明路由出口-->
    <router-outlet></router-outlet>
  </div>
	`
})

@RouteConfig([
  {path: "/todo", component: TodoList, name: "Todo", useAsDefault: true},
  {path: "/form", component: Angular2Form, name: "Form"}
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
    this.navList=['Todo','Form'];
  }
  isCurrent(path:String){
    return this.locationStrategy.path()==='/'+path.toLowerCase();
  }
}

bootstrap(Angular2Demo, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);