import {Component,Output,EventEmitter} from 'angular2/core';

interface Filter{
  name:string;
  checked:boolean
}

@Component({
  selector:'[todo-filter]',
  inputs:['defaultFilter:todo-filter'],
  template:`
    <div class="btn-group">
      <button class="btn btn-primary"
        *ngFor="#filter of filters"
        [class.active]="filter.checked"
        (click)="onFilterBtnClick(filter)">
        {{filter.name}}
      </button>

    </div>
  `
})

export class TodoFilter{
  private filters:Array<Filter>;
  @Output() filterChange=new EventEmitter();

  constructor(){
    this.filters=[
      {name:'All',checked:false},
      {name:'Done',checked:false},
      {name:'Undone',checked:false}
    ]
  }

  set defaultFilter(name){
    this.selectFilter(name);
  }
  private selectFilter(name:string):void{
    this.filters.forEach(item=>{
      if(item.name===name){
        item.checked=true;
      }else{
        item.checked=false;
      }
    });
  }
  onFilterBtnClick(filter:Filter):void{

    this.selectFilter(filter.name);
    this.filterChange.emit(filter);
  }
}
