import {bootstrap} from 'angular2/platform/browser'
import {TodoList} from './component/todo.list';
import {Inject,Component} from 'angular2/core';
import {LocationStrategy,RouteConfig,Router,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";


@Component({
  selector:'angular2-form',
  template:`
    <h1>angular2 form</h1>
  `
})

class Angular2Form{}


@Component({
  selector:"angular2-demo",
  directives:[ROUTER_DIRECTIVES],
  template : `
    <div class="container">
      <header>
        <h1>{{title}}</h1>
      </header>

      <div class="row">
        <!--声明路由入口-->
        <nav class="col-lg-12">
          <b><a [routerLink]="['Todo']">Todo</a> </b>|
          <b><a [routerLink]="['Form']">Form</a></b>
        </nav>
      </div>

      <div class="row">
        <!--声明路由出口-->
        <router-outlet></router-outlet>
      </div>
    </div>
	`
})

@RouteConfig([
  {path:"/todo", component:TodoList,as:"Todo"},
  {path:"/form", component:Angular2Form,as:"Form"}
])
class Angular2Demo{
  private title:string;
  public router:Router;
  constructor(@Inject(Router) rt,@Inject(LocationStrategy) ls){
    this.title='Angular2 Demo';
    ls.pushState = function(){};
    this.router = rt;
  }
}

bootstrap(Angular2Demo,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);