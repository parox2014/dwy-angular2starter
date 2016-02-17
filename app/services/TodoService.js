System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var TodoService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService(http) {
                    this.http = http;
                    this.ls = window.localStorage;
                    this.todoList = JSON.parse(this.ls.getItem('todoList')) || [];
                }
                TodoService.prototype._saveToLocalStorage = function () {
                    this.ls.setItem('todoList', JSON.stringify(this.todoList));
                };
                TodoService.prototype.query = function (callback) {
                    callback(this.todoList);
                };
                TodoService.prototype.add = function (todo) {
                    this.todoList.push(todo);
                    this._saveToLocalStorage();
                };
                TodoService.prototype.remove = function (todo) {
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todoService.js.map