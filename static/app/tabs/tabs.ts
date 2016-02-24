import {Component,Input,Output,EventEmitter,ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES,COMMON_DIRECTIVES} from 'angular2/common';
import {ProfileForm} from '../form/profile.form';

interface Tab{
  name:string;
  isActive:boolean;
}

@Component({
  selector:'tab-header',
  directives:[CORE_DIRECTIVES,COMMON_DIRECTIVES],
  template:`
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation"
        *ngFor="#tab of tabList"
        [class]="itemClass?itemClass:''"
         (click)="onTabItemClick(tab)"
        [class.active]="tab.isActive">
          <a href="javascript:;" role="tab" data-toggle="tab">{{tab.name}}</a>
        </li>
    </ul>
  `
})

class TabHeader{
  @Input() tabList:Array<Tab>=[];
  @Input() itemClass:string='';

  @Output() itemClick=new EventEmitter();
  onTabItemClick(tab:Tab){
    tab.isActive=true;
    this.tabList.forEach((item)=>{
      if(item.name!=tab.name){
        item.isActive=false;
      }
    });

    this.itemClick.emit(tab);
  }
}


@Component({
  selector: 'tabs',
  directives:[TabHeader],
  template: `
  <tab-header [tabList]="tabList" [itemClass]="itemClass" (itemClick)="onTabClick($event)"></tab-header>
  <div class="tab-content">
    <ng-content></ng-content>
  </div>

  `
})

export class Tabs{
  @Input() tabList:Array<Tab>=[];
  @Input() itemClass:string;

  @Output() tabActive=new EventEmitter();
  private tabPane:HTMLElement[];
  constructor(private erf:ElementRef){
    let tabContent:HTMLElement=erf.nativeElement.querySelector('.tab-content');
    this.tabPane=[].slice.call(tabContent.children);
  }

  ngOnInit(){
    this.setTabPaneClassAndAttr();
    this.onTabClick(this.getActiveTab());
  }
  getActiveTab(){

    var tabList=this.tabList;
    var len=tabList.length;

    for(var i=0;i<len;i++){
      if(tabList[i].isActive){
        break;
      }
    }

    return tabList[i];
  }
  private setTabPaneClassAndAttr(){
    this.tabPane.forEach((item:HTMLElement)=>{
      item.classList.add('tab-pane');
      item.setAttribute('role','tabpanel');
    });
  }
  onTabClick(tab){
    var index=this.tabList.indexOf(tab);
    this.activeTabPaneByIndex(index);
    this.tabActive.emit(tab);
  }

  activeTabPaneByIndex(index){

    this.tabPane.forEach((el:HTMLElement)=>{
      el.classList.remove('active');
    });

    this.tabPane[index].classList.add('active');
  }

}

@Component({
  selector:'tab-comp',
  directives:[Tabs,ProfileForm],
  template:`
    <tabs [tabList]="tabs" (tabActive)="onTabActive($event,index)">

      <profile-form></profile-form>

      <div class="bg-info">
        <h1>Todo</h1>
      </div>
      <div>
        <h1>message</h1>
      </div>
      <div>
        <h1>settings</h1>
      </div>
    </tabs>
  `
})

export class TabComponent{
  tabs:Array<Tab>=[
    {name:'profile',isActive:false},
    {name:'todos',isActive:false},
    {name:'message',isActive:true},
    {name:'settings',isActive:false}
  ];
  onTabActive(tab){
    console.log(tab);
  }
}