import {bootstrap} from 'angular2/platform/browser'

import {Inject,Component,provide,PLATFORM_PIPES,ContentChild,enableProdMode} from 'angular2/core';
import {NG_VALIDATORS} from 'angular2/common';
import {LocationStrategy,RouteConfig,Router,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS,RequestOptions,BaseRequestOptions,Headers} from "angular2/http";

import {LocalDataBase} from './services/DataBaseService';
import {TodoService} from './services/TodoService';

import {CUSTOM_PIPES} from './pipes/pipes';

import {ProfileForm} from './form/profile.form';
import {TodoComponent} from "./todo/todo";
import {TabComponent} from "./tabs/tabs";


@Component({
  selector: "angular2-demo",
  providers:[HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  template: `
  <nav class="navbar navbar-diy">
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
            <a [routerLink]="nav">{{nav[0]}}</a>
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
  {path: "/todo/...", component: TodoComponent, name: "Todo", useAsDefault: true},
  {path: "/profile-form", component: ProfileForm, name: "ProfileForm"},
  {path: "/tabs", component: TabComponent, name: "Tabs"},
])

class Angular2Demo {
  private title='Angular2 Demo';
  private navList=[['Todo','Todo'],['ProfileForm'],['Tabs']];
}

class MyRequestOptions extends BaseRequestOptions{
  headers:Headers=new Headers({'X-Request-With':'XMLHttpRequest'});
}

enableProdMode();

bootstrap(Angular2Demo, [ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  LocalDataBase,
  TodoService,
  provide(RequestOptions,{useClass:MyRequestOptions}),
  provide(PLATFORM_PIPES,{useValue:CUSTOM_PIPES,multi:true})
]);