import {Component,ElementRef} from 'angular2/core';
import {TodoItem} from './todo.item';
import {Todo} from '../interfaces/todo';
import {TodoService} from '../services/TodoService';
import {TodoForm} from './todo.form';
import {TodoFilter} from './todo.filter';
import {CanDeactivate} from 'angular2/router';

@Component({
  selector: 'todo-list',
  directives: [TodoItem,TodoForm,TodoFilter],
  template: `
    <div>
      <todo-form (formSubmit)="createTodo($event)"></todo-form>
      <div class="panel panel-default">
        <div class="panel-heading" todo-filter="All" (filterChange)="onFilterChange($event)"></div>

        <div class="panel-body">
          <ul class="list-unstyled list-group">
            <todo-item *ngFor="#todo of todoList"
            (toggleDone)="onToggleDone(todo)"
            (remove)="onRemove($event)"
            class="list-group-item" [ngClass]="{'list-group-item-success':todo.done}"
            [todo]="todo">
            </todo-item>
          </ul>
        </div>

        <div class="panel-footer">
          {{todoList.length}}
        </div>
      </div>


    </div>
  `
})

export class TodoList {
  todoList:Array<Todo>;
  currentFilter='All';

  //如果前面加了private 或者public修饰，该属性或自动成为类的成员
  constructor(private todoService:TodoService,private ele:ElementRef) {
    //var animate=new Animation(ele,{});
  }

  ngOnInit() {
    this.todoList=this.queryListByFilter(this.currentFilter);
  }

  createTodo(todo:Todo){
    this.todoService.save(todo);
    this.todoList=this.queryListByFilter(this.currentFilter)
  }

  onToggleDone(todo:Todo){
    this.todoService.toggleDone(todo);
    if(this.currentFilter!=='All'){
      setTimeout(()=>{
        this.todoList=this.queryListByFilter(this.currentFilter)
      },100);

    }
  }
  onRemove(id:number){
    this.todoService.removeById(id);
    this.todoList=this.queryListByFilter(this.currentFilter);
  }
  onFilterChange(filter:any){
    this.currentFilter=filter.name;
    this.todoList=this.queryListByFilter(filter.name);
  }
  queryListByFilter(name:string):Array<Todo>{
    var param={done:null};

    if(name==='Done'){
      param.done=true;
    }else if(name==='Undone'){
      param.done=false;
    }else{
      param=null;
    }
    return this.todoService.query(param);
  }
}
