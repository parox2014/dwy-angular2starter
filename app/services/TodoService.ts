import {Http} from 'angular2/http';
import {Todo} from '../interfaces/todo';
import {Injectable} from 'angular2/core';

@Injectable()

export class TodoService {
  private http:Http;
  public todoList:Array<Todo>;
  private ls:any;

  constructor(http:Http) {
    this.http = http;
    this.ls = window.localStorage;
    this.todoList = JSON.parse(this.ls.getItem('todoList')) || [];
  }

  private _saveToLocalStorage() {
    this.ls.setItem('todoList', JSON.stringify(this.todoList));
  }

  query(query) {
    //callback(this.todoList);
    return starterDB.queryAll("todos", {query: query});
  }

  save(todo:Todo) {

    todo.createAt=new Date();
    todo.updateAt=new Date();

    starterDB.insert('todos',todo);

    starterDB.commit();
  }

  remove(todo) {

  }

  updateById(id:number,update:Object){
    starterDB.insertOrUpdate("todos", {ID: id}, update);
    starterDB.commit();
  }

  toggleDone(todo:Todo){
    this.updateById(todo.ID,{done:todo.done})
  }
}