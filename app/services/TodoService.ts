import {Http,URLSearchParams,RequestOptionsArgs,Headers,Response,RequestOptions} from 'angular2/http';
import {Todo} from '../interfaces/todo';
import {LocalDataBase} from './DataBaseService';
import {Injectable,Injector} from 'angular2/core';

var id:number = 0;

@Injectable()

export class TodoService {
  id:number;

  constructor(private http:Http,private db:LocalDataBase) {

    this.id = id + 1;
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
    sort = sort || ['createAt', 'DESC'];


    return this.db.queryAll("todos", {
      query: query,
      limit: limit,
      sort: [sort]
    });
  }
  getById(id):Todo{
    return this.query({ID:id})[0];
  }
  /**
   * create todo
   * @param todo
   */
  save(todo:Todo):void {

    todo.createAt = new Date();
    todo.updateAt = new Date();

    this.db.insert('todos', todo);

    this.db.commit();
  }

  /**
   * remove todo by id
   * @param id
   */
  removeById(id:number):void {
    this.db.deleteRows('todos', {ID: id});
    this.db.commit();
  }

  updateById(id:number, update:Object):void {
    this.db.insertOrUpdate("todos", {ID: id}, update);
    this.db.commit();
  }

  toggleDone(todo:Todo):void {
    this.updateById(todo.ID, {done: todo.done})
  }
}
