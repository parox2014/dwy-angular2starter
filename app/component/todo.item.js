System.register(['angular2/core', '../pipes/datePipe', '../services/TodoService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, datePipe_1, TodoService_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (datePipe_1_1) {
                datePipe_1 = datePipe_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(ts) {
                    this._todoService = ts;
                }
                TodoItem.prototype.onChange = function (e) {
                    this.todo.done = e.target.checked;
                    this._todoService.toggleDone(this.todo);
                };
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        inputs: ['todo'],
                        pipes: [datePipe_1.MyDate],
                        providers: [TodoService_1.TodoService],
                        template: "\n    <li [id]=\"todo.ID\">\n      <input type=\"checkbox\" [(ngModel)]=\"todo.done\" (change)=\"onChange($event)\">\n      <span>{{todo.name}}</span>\n      <span>{{todo.createAt|myDate}}</span>\n      <span>{{todo.done}}</span>\n    </li>\n  "
                    }), 
                    __metadata('design:paramtypes', [TodoService_1.TodoService])
                ], TodoItem);
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=todo.item.js.map