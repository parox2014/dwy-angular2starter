System.register(['angular2/core', 'angular2/router', '../services/TodoService', '../pipes/datePipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, TodoService_1, datePipe_1;
    var TodoDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (datePipe_1_1) {
                datePipe_1 = datePipe_1_1;
            }],
        execute: function() {
            TodoDetail = (function () {
                function TodoDetail(router, routeParams, todoService) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.todoService = todoService;
                }
                TodoDetail.prototype.ngOnInit = function () {
                    var id = Number(this.routeParams.get('id'));
                    this.todo = this.todoService.query({ ID: id })[0];
                };
                TodoDetail.prototype.onDoneBtnClick = function () {
                    var todo = this.todo;
                    todo.done = !todo.done;
                    this.todoService.toggleDone(todo);
                };
                TodoDetail = __decorate([
                    core_1.Component({
                        selector: 'todo-detail',
                        providers: [TodoService_1.TodoService],
                        pipes: [datePipe_1.MyDate],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\n      <h1>{{todo.name}}</h1>\n      <ul class=\"list-group\">\n      <li class=\"list-group-item list-group-item-text\">\n        <span>Create At:</span>\n        <strong>{{todo.createAt|myDate}}</strong>\n      </li>\n      <li class=\"list-group-item list-group-item-text\">\n        <span>Update At:</span>\n        <strong>{{todo.updateAt|myDate}}</strong>\n      </li>\n      </ul>\n\n      <div>\n        <button class=\"btn btn-default btn-block\"\n          (click)=\"onDoneBtnClick()\"\n          [class.btn-success]=\"todo.done\">\n          {{todo.done?'Restart':'Done'}}\n         </button>\n      </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, TodoService_1.TodoService])
                ], TodoDetail);
                return TodoDetail;
            })();
            exports_1("TodoDetail", TodoDetail);
        }
    }
});
//# sourceMappingURL=todo.detail.js.map