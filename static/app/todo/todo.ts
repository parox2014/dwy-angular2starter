import {Component,ElementRef} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';
import {Router,RouteConfig,ROUTER_DIRECTIVES,CanDeactivate} from 'angular2/router';
import {TodoList} from "./todo.list";
import {TodoDetail} from "./todo.detail";


class BaseComponent implements CanDeactivate{
  dom:BrowserDomAdapter;
  elRef:ElementRef;
  constructor(elRef,dom){
    this.dom=dom;
    this.elRef=elRef;
    this.dom.addClass(this.elRef.nativeElement,'fade');
  }
  ngAfterContentInit(){
    setTimeout(()=>{
      this.dom.addClass(this.elRef.nativeElement,'in');
    },100);
  }

  routerCanDeactivate(){
    this.dom.removeClass(this.elRef.nativeElement,'in');
  }
}

@Component({
  selector:'todo',
  directives:[ROUTER_DIRECTIVES],
  host:{
    'class':'panel panel-default',
    'style':'display:block'
  },
  template:`
    <div class="panel-heading">
      <h4>{{title}}</h4>
    </div>

    <div class="panel-body">
      <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([
  {name:'Todo',path:'/',component:TodoList,useAsDefault:true},
  {name:'TodoDetail',path:'/:id',component:TodoDetail}
])


export class TodoComponent extends BaseComponent{
  private title='My Todo';

  constructor(public elRef:ElementRef,public dom:BrowserDomAdapter){
    super(elRef,dom);
  }

}