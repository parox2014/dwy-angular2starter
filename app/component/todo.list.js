System.register(['angular2/core', './todo.item', '../services/todoService', './todo.form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_item_1, todoService_1, todo_form_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_item_1_1) {
                todo_item_1 = todo_item_1_1;
            },
            function (todoService_1_1) {
                todoService_1 = todoService_1_1;
            },
            function (todo_form_1_1) {
                todo_form_1 = todo_form_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.ts = todoService;
                }
                TodoList.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ts.query(function (res) {
                        _this.todoList = res;
                    });
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [todo_item_1.TodoItem, todo_form_1.TodoForm],
                        providers: [todoService_1.TodoService],
                        template: "\n    <div>\n      <todo-form [onSubmit]=\"onSubmit\"></todo-form>\n      <ul class=\"list-unstyled\">\n        <todo-item *ngFor=\"#todo of todoList\" [todo]=\"todo\">\n\n        </todo-item>\n      </ul>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [todoService_1.TodoService])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todo.list.js.map