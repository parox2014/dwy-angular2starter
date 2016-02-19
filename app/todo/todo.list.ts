import {Component} from 'angular2/core';
import {TodoItem} from './todo.item';
import {Todo} from '../interfaces/todo';
import {TodoService} from '../services/TodoService';
import {TodoForm} from './todo.form';
import {TodoFilter} from './todo.filter';

@Component({
  selector: 'todo-list',
  directives: [TodoItem,TodoForm,TodoFilter],
  providers:[TodoService],
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
            class="list-group-item" [class.list-group-item-success]="todo.done"
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
  public todoList:Array<Todo>;
  private todoService:TodoService;
  private currentFilter='All';
  constructor(todoService:TodoService) {
    this.todoService = todoService;
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
