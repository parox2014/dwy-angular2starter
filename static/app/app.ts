import {
  Inject,
  Component,
  ElementRef
} from 'angular2/core';

import {
  Router,
  RouteConfig,
  ROUTER_DIRECTIVES
} from "angular2/router";

import {ProfileForm} from './form/profile.form';
import {TodoComponent} from "./todo/todo";
import {TabComponent} from "./tabs/tabs";
import {ModalComponent} from './modal/modal'


@Component({
  selector: "angular2-demo",
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
          <li *ngFor="#nav of navList" [class.current]="isCurrentRouter(nav)">
            <a [routerLink]="nav.route">{{nav.route[0]}}</a>
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
  {path: "/modal", component: ModalComponent, name: "Modal"}

])

export class Angular2Demo{
  private title:string;
  public navList:Array<any>;
  public currentRoute:string;
  constructor(@Inject('appConfig') appConfig,public router:Router,public elRef:ElementRef){
    this.title=appConfig.APP_NAME;
    this.navList=appConfig.NAV_LIST;

  }
  isCurrentRouter(nav){
    return nav.path.indexOf(this.currentRoute)>-1;
  }
  ngOnInit(){
    this.router.subscribe((path:string)=>{
      this.currentRoute=path;
    });
  }
}
