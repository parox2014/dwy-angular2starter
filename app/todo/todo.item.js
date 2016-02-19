System.register(['angular2/core', 'angular2/router', '../pipes/datePipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, datePipe_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (datePipe_1_1) {
                datePipe_1 = datePipe_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(router) {
                    this.toggleDone = new core_1.EventEmitter();
                    this.remove = new core_1.EventEmitter();
                    this.router = router;
                }
                TodoItem.prototype.onChange = function (e) {
                    this.todo.done = e.target.checked;
                    this.toggleDone.emit(this.todo);
                };
                TodoItem.prototype.onRemoveBtnClick = function () {
                    this.remove.emit(this.todo.ID);
                };
                TodoItem.prototype.onTodoNameClick = function () {
                    this.router.navigate(['TodoDetail', { id: this.todo.ID }]);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "toggleDone", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "remove", void 0);
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        inputs: ['todo'],
                        pipes: [datePipe_1.MyDate],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <li [id]=\"todo.ID\" class=\"clearfix\">\n      <div class=\"col-md-1\">\n        <input type=\"checkbox\" [(ngModel)]=\"todo.done\" (change)=\"onChange($event)\">\n      </div>\n\n      <div class=\"col-md-3\">\n        <a href=\"javascript:;\" (click)=\"onTodoNameClick()\">\n          <strong>{{todo.name}}</strong>\n        </a>\n      </div>\n\n      <div class=\"col-md-2\">\n        <span>{{todo.createAt|myDate}}</span>\n      </div>\n\n      <div class=\"col-md-2\">\n        <button class=\"btn btn-danger btn-xs\" (click)=\"onRemoveBtnClick()\">remove</button>\n      </div>\n\n    </li>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TodoItem);
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=todo.item.js.map