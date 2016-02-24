System.register(['angular2/http', './DataBaseService', 'angular2/core', 'rxjs/Subject'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, DataBaseService_1, core_1, Subject_1;
    var id, TodoService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (DataBaseService_1_1) {
                DataBaseService_1 = DataBaseService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            id = 0;
            TodoService = (function () {
                function TodoService(http, db) {
                    this.http = http;
                    this.db = db;
                    this.id = id + 1;
                }
                /**
                 * query todo list
                 * @param query
                 * @param limit
                 * @param sort
                 * @returns {DebugElement[]|ng.DebugElement[]|ngWorker.DebugElement[]}
                 */
                TodoService.prototype.query = function (query, limit, sort) {
                    limit = limit || 10;
                    sort = sort || ['createAt', 'DESC'];
                    var option = {
                        query: query,
                        limit: limit,
                        sort: [sort]
                    };
                    var stream = new Subject_1.Subject();
                    var list = this.db.queryAll("todos", option);
                    setTimeout(function () {
                        stream.next(list);
                    }, 100);
                    return stream;
                };
                TodoService.prototype.getById = function (id) {
                    var stream = new Subject_1.Subject();
                    this.query({ ID: id })
                        .subscribe(function (todos) {
                        stream.next(todos[0]);
                    });
                    return stream;
                };
                /**
                 * create todo
                 * @param todo
                 */
                TodoService.prototype.save = function (todo) {
                    todo.createAt = new Date();
                    todo.updateAt = new Date();
                    this.db.insert('todos', todo);
                    this.db.commit();
                };
                /**
                 * remove todo by id
                 * @param id
                 */
                TodoService.prototype.removeById = function (id) {
                    this.db.deleteRows('todos', { ID: id });
                    this.db.commit();
                };
                TodoService.prototype.updateById = function (id, update) {
                    this.db.insertOrUpdate("todos", { ID: id }, update);
                    this.db.commit();
                };
                TodoService.prototype.toggleDone = function (todo) {
                    this.updateById(todo.ID, { done: todo.done });
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, DataBaseService_1.LocalDataBase])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=TodoService.js.map