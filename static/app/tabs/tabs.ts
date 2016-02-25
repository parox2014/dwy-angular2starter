import {Component,Input,Output,EventEmitter,ElementRef,Renderer,ViewChildren,ContentChildren,QueryList} from 'angular2/core';
import {CORE_DIRECTIVES,COMMON_DIRECTIVES} from 'angular2/common';
import {ProfileForm} from '../form/profile.form';
import {AnimationComponent} from '../AnimationComponent';
interface Tab {
  name:string;
  isActive:boolean;
}

@Component({
  selector: 'tab-header',
  directives: [CORE_DIRECTIVES, COMMON_DIRECTIVES],
  host:{
    'class':'nav nav-tabs',
    'role':'tablist'
  },
  template: `
    <li role="presentation"
      *ngFor="#tab of tabList"
      [class]="itemClass?itemClass:''"
       (click)="onTabItemClick(tab)"
      [class.active]="tab.isActive">
      <a href="javascript:;" role="tab">{{tab.name}}</a>
    </li>
  `
})


class TabHeader {
  @Input() tabList:Array<Tab> = [];
  @Input() itemClass:string = '';
  @Input() align:string = '';

  @Output() itemClick = new EventEmitter();

  constructor(private eleRef:ElementRef, private renderer:Renderer) {

  }
  ngOnInit(){
    let el=this.eleRef;

    this.renderer.setElementStyle(el, 'display', 'block');

    if (this.align) {
      this.renderer.setElementClass(el,'nav-' + this.align,true);
    }
  }
  onTabItemClick(tab:Tab):void {
    tab.isActive = true;
    this.tabList.forEach((item)=> {
      if (item.name != tab.name) {
        item.isActive = false;
      }
    });

    this.itemClick.emit(tab);
  }
}

@Component({
  selector: 'tab-pane',
  host:{
    'class':'tab-pane fade',
    'role':'tabpanel'
  },
  template: `
    <ng-content></ng-content>
  `
})

class TabPane {

  constructor(private elRef:ElementRef, private renderer:Renderer) {

  }

  show() {
    let el=this.elRef;
    this.renderer.setElementClass(el, 'active',true);
    setTimeout(()=> {
      this.renderer.setElementClass(el, 'in',true);
    }, 100);

  }

  hide() {
    let el=this.elRef;
    this.renderer.setElementClass(el, 'in',false);
    this.renderer.setElementClass(el, 'active',false);
  }
}

@Component({
  selector: 'tabs',
  directives: [TabHeader],
  host:{
    'style':'display:block'
  },
  template: `
  <tab-header [tabList]="tabList"
    [itemClass]="itemClass"
    [align]="tabAlign"
    (itemClick)="onTabClick($event)"></tab-header>
  <div class="tab-content">
    <ng-content></ng-content>
  </div>

  `
})

export class Tabs {
  @Input() tabList:Array<Tab> = [];
  @Input() itemClass:string;
  @Input() tabAlign:string;

  @Output() tabActive = new EventEmitter();

  @ContentChildren(TabPane) tabPane:QueryList<TabPane>;


  ngAfterContentInit() {
    this.onTabClick(this.getActiveTab());
  }

  getActiveTab():Tab {
    let tabList = this.tabList;
    let len:number = tabList.length;
    let i:number = 0;
    let tab:Tab;

    for (; i < len; i++) {

      tab = tabList[i];

      if (tab.isActive) {
        break;
      }
    }

    return tab;
  }

  onTabClick(tab:Tab):void {
    var index:number = this.tabList.indexOf(tab);
    this.activeTabPaneByIndex(index);
    this.tabActive.emit(tab);
  }

  activeTabPaneByIndex(index:number):void {
    this.tabPane.toArray().forEach((tabPane:TabPane, i:number)=> {
      let method:string = index === i ? 'show' : 'hide';

      tabPane[method]();
    });
  }

}

@Component({
  selector: 'tab-comp',
  directives: [Tabs, TabPane, ProfileForm,CORE_DIRECTIVES],
  host:{
    'style':'display:block'
  },
  template: `
    <div class="well well-lg">current tab is:{{currentTab|json}}</div>
    <br>
    <tabs [tabList]="tabs" [tabAlign]="'justified'" (tabActive)="onTabActive($event)">

      <tab-pane>
        <profile-form></profile-form>
      </tab-pane>
      <tab-pane>
        <h1>Todo</h1>
      </tab-pane>
      <tab-pane>
        <h1>message</h1>
      </tab-pane>
      <tab-pane>
        <h1>settings</h1>
      </tab-pane>
    </tabs>

    <tabs [tabList]="secondTabs" (tabActive)="onTabActive($event)">

      <tab-pane *ngFor="#tab of secondTabs">
        <h1>{{tab.name}}</h1>
      </tab-pane>

    </tabs>
  `
})

export class TabComponent extends AnimationComponent{
  tabs:Array<Tab> = [
    {name: 'profile', isActive: true},
    {name: 'todos', isActive: false},
    {name: 'message', isActive: false},
    {name: 'settings', isActive: false}
  ];
  secondTabs:Tab[]=[
    {name: 'tab1', isActive: false},
    {name: 'tab2', isActive: true},
    {name: 'tab3', isActive: false},
    {name: 'tab4', isActive: false}
  ];
  currentTab:Tab;
  public animation:string='slide';
  public direction:string='leftToRight';
  constructor(public elRef:ElementRef,public renderer:Renderer){
    super(elRef,renderer);
  }

  onTabActive(tab) {
    this.currentTab = tab;
    console.log(tab);
  }
}