import {Http} from 'angular2/http';
import {Todo} from '../interfaces/todo';
import {Injectable} from 'angular2/core';
import Any = jasmine.Any;

@Injectable()

export class TodoService {
  private http:Http;
  public todoList:Array<Todo>;
  private ls:any;

  constructor(http:Http) {
    this.http = http;
    this.ls=window.localStorage;
    this.todoList=JSON.parse(this.ls.getItem('todoList'))||[];
  }
  private _saveToLocalStorage(){
    this.ls.setItem('todoList',JSON.stringify(this.todoList));
  }
  query(callback) {
    callback(this.todoList);
  }

  add(todo:Todo){
    this.todoList.push(todo);
    this._saveToLocalStorage();
  }
  remove(todo){

  }
}