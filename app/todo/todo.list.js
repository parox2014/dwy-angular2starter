System.register(['angular2/core', './todo.item', '../services/TodoService', './todo.form', './todo.filter'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_item_1, TodoService_1, todo_form_1, todo_filter_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_item_1_1) {
                todo_item_1 = todo_item_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (todo_form_1_1) {
                todo_form_1 = todo_form_1_1;
            },
            function (todo_filter_1_1) {
                todo_filter_1 = todo_filter_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                //如果前面加了private 或者public修饰，该属性或自动成为类的成员
                function TodoList(todoService, ele) {
                    this.todoService = todoService;
                    this.ele = ele;
                    this.currentFilter = 'All';
                    //var animate=new Animation(ele,{});
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
                    var param = { done: null };
                    if (name === 'Done') {
                        param.done = true;
                    }
                    else if (name === 'Undone') {
                        param.done = false;
                    }
                    else {
                        param = null;
                    }
                    return this.todoService.query(param);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [todo_item_1.TodoItem, todo_form_1.TodoForm, todo_filter_1.TodoFilter],
                        template: "\n  <todo-form (formSubmit)=\"createTodo($event)\"></todo-form>\n  <div style=\"margin-bottom: 20px;\" todo-filter=\"All\" (filterChange)=\"onFilterChange($event)\"></div>\n\n  <hr>\n  <ul *ngIf=\"todoList.length>0\" class=\"list-unstyled list-group\">\n    <todo-item *ngFor=\"#todo of todoList\"\n    (toggleDone)=\"onToggleDone(todo)\"\n    (remove)=\"onRemove($event)\"\n    class=\"list-group-item\" [ngClass]=\"{'list-group-item-success':todo.done}\"\n    [todo]=\"todo\">\n    </todo-item>\n  </ul>\n  <h4 class=\"text-center\" *ngIf=\"todoList.length===0\">Have not todo,plesae create todo first</h4>\n  "
                    }), 
                    __metadata('design:paramtypes', [TodoService_1.TodoService, core_1.ElementRef])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todo.list.js.map