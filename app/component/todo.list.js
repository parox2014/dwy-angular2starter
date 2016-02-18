System.register(['angular2/core', './todo.item', '../services/todoService', './todo.form', './todo.filter'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_item_1, todoService_1, todo_form_1, todo_filter_1;
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
            },
            function (todo_filter_1_1) {
                todo_filter_1 = todo_filter_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.currentFilter = 'Done';
                    this.todoService = todoService;
                }
                TodoList.prototype.ngOnInit = function () {
                    this.todoList = this.queryListByFilter(this.currentFilter);
                };
                TodoList.prototype.createTodo = function (todo) {
                    this.todoService.save(todo);
                    this.todoList = this.queryListByFilter(this.currentFilter);
                };
                TodoList.prototype.onToggleDone = function (todo) {
                    var _this = this;
                    this.todoService.toggleDone(todo);
                    if (this.currentFilter !== 'All') {
                        setTimeout(function () {
                            _this.todoList = _this.queryListByFilter(_this.currentFilter);
                        }, 100);
                    }
                };
                TodoList.prototype.onRemove = function (id) {
                    this.todoService.removeById(id);
                    this.todoList = this.queryListByFilter(this.currentFilter);
                };
                TodoList.prototype.onFilterChange = function (filter) {
                    this.currentFilter = filter.name;
                    this.todoList = this.queryListByFilter(filter.name);
                };
                TodoList.prototype.queryListByFilter = function (name) {
                    var param = {};
                    if (name === 'Done') {
                        param.done = true;
                    }
                    else if (name === 'Undone') {
                        param.done = false;
                    }
                    return this.todoService.query(param);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [todo_item_1.TodoItem, todo_form_1.TodoForm, todo_filter_1.TodoFilter],
                        providers: [todoService_1.TodoService],
                        template: "\n    <div>\n      <todo-form (formSubmit)=\"createTodo($event)\"></todo-form>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" todo-filter=\"Done\" (filterChange)=\"onFilterChange($event)\"></div>\n\n        <div class=\"panel-body\">\n          <ul class=\"list-unstyled list-group\">\n            <todo-item *ngFor=\"#todo of todoList\"\n            (toggleDone)=\"onToggleDone(todo)\"\n            (remove)=\"onRemove($event)\"\n            class=\"list-group-item\" [class.list-group-item-success]=\"todo.done\"\n            [todo]=\"todo\">\n            </todo-item>\n          </ul>\n        </div>\n\n        <div class=\"panel-footer\">\n          {{todoList.length}}\n        </div>\n      </div>\n\n\n    </div>\n  "
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