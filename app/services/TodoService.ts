import {Http,URLSearchParams,BaseRequestOptions,RequestMethod,RequestOptionsArgs} from 'angular2/http';
import {Todo} from '../interfaces/todo';
import {Injectable,Injector} from 'angular2/core';

var id=0;

@Injectable()

export class TodoService {
  private http:Http;
  id:number;
  constructor(http:Http) {
    this.http = http;
    this.id=id+1;
  }

  /**
   * query todo list
   * @param query
   * @param limit
   * @param sort
   * @returns {DebugElement[]|ng.DebugElement[]|ngWorker.DebugElement[]}
   */
  query(query?:Object, limit?:number, sort?:Array<string>):Array<Todo> {
    limit = limit || 10;
    sort = sort || ['createAt','DESC'];

    return starterDB.queryAll("todos", {
      query: query,
      limit: limit,
      sort: [sort]
    });
  }

  /**
   * create todo
   * @param todo
   */
  save(todo:Todo):void {

    todo.createAt = new Date();
    todo.updateAt = new Date();

    starterDB.insert('todos', todo);

    starterDB.commit();
  }

  /**
   * remove todo by id
   * @param id
   */
  removeById(id:number):void {
    starterDB.deleteRows('todos',{ID:id});
    starterDB.commit();
  }

  updateById(id:number, update:Object):void {
    starterDB.insertOrUpdate("todos", {ID: id}, update);
    starterDB.commit();
  }

  toggleDone(todo:Todo):void {
    this.updateById(todo.ID, {done: todo.done})
  }
}
