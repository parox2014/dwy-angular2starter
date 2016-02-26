import {
  Component,
  Query,
  ContentChildren,
  EventEmitter,
  ElementRef,
  Renderer,
  QueryList,
  AfterContentInit
} from 'angular2/core';

import {COMMON_DIRECTIVES} from 'angular2/common';
import {ProfileForm} from '../form/profile.form';
import {AnimationComponent} from '../AnimationComponent';
import {AbstractControl} from "angular2/common";
import {FormBuilder} from "angular2/common";


@Component({
  selector: 'tab-pane',
  directives:[COMMON_DIRECTIVES],
  inputs:['heading','isActive'],
  host:{
    'class':'tab-pane fade',
    'role':'tabpanel'
    //'[ngClass]':'{active:isActive,in:isActive}'
    //'[class.active]':'isActive',
    //'[class.in]':'isActive'
  },
  template: `
    <ng-content></ng-content>
  `
})

export class TabPane {
  public heading:string;
  public isActive:boolean=false;
  constructor(private _elRef:ElementRef,private _renderer:Renderer){

  }
  show(){
    this._renderer.setElementClass(this._elRef,'active',true);
    setTimeout(()=>{
      this._renderer.setElementClass(this._elRef,'in',true);
    },50);
    this.isActive=true;
  }
  hide(){
    this._renderer.setElementClass(this._elRef,'active',false);
    this._renderer.setElementClass(this._elRef,'in',false);
    this.isActive=false;
  }
}

@Component({
  selector: 'tabs',
  directives:[COMMON_DIRECTIVES],
  inputs:['itemClass','tabAlign'],
  outputs:['tabActive'],
  host:{
    'style':'display:block'
  },
  template: `
  <ul class="nav nav-tabs nav-{{tabAlign}}" role="tablist">
    <li role="presentation"
      *ngFor="#pane of panes"
      [class]="itemClass?itemClass:''"
      (click)="onTabItemClick(pane)"
      [class.active]="pane.isActive">
      <a href="javascript:;" role="tab">{{pane.heading}}</a>
    </li>
  </ul>
  <div class="tab-content">
    <ng-content></ng-content>
  </div>

  `
})

export class Tabs implements AfterContentInit{
  public itemClass:string;
  public tabAlign:string;

  tabActive = new EventEmitter();

  @ContentChildren(TabPane)

  panes:QueryList<TabPane>;
  constructor(){

  }

  ngAfterContentInit(){
    this.onTabItemClick(this.getActivePane());
  }
  getActivePane():TabPane{
    let panes=this.panes.toArray();
    let len:number=this.panes.length;
    let i:number=0;
    let pane;

    for(;i<len;i++){
      pane=panes[i];
      if(pane.isActive){
        break;
      }
    }
    return pane;
  }
  onTabItemClick(pane:TabPane):void {
    pane.show();
    this.panes.toArray().forEach((item)=> {
      if (item != pane) {
        item.hide();
      }
    });
    this.tabActive.emit(pane);
  }
}


//使用方法
@Component({
  selector: 'tab-comp',
  directives: [Tabs, TabPane, ProfileForm,COMMON_DIRECTIVES],
  host:{
    'style':'display:block'
  },
  template: `
    <div class="well">current tab is:{{currentPane?currentPane.heading:''}}</div>
    <br>
    <tabs (tabActive)="onTabActive($event)">

      <tab-pane [heading]="'Profile Form'" [isActive]="true">
        <profile-form></profile-form>
      </tab-pane>
      <tab-pane [heading]="'Todo'">
        <h1>Todo</h1>
      </tab-pane>
      <tab-pane [heading]="'Message'">
        <h1>message</h1>
      </tab-pane>
      <tab-pane [heading]="'Settings'">
        <h1>settings</h1>
      </tab-pane>

    </tabs>
  `
})

export class TabComponent extends AnimationComponent{

  currentPane:TabPane;
  public animation:string='slide';
  public direction:string='leftToRight';
  constructor(public elRef:ElementRef,public renderer:Renderer){
    super(elRef,renderer);
  }

  onTabActive(pane:TabPane) {
    this.currentPane = pane;
  }
}
