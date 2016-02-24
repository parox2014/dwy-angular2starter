System.register(['angular2/core', 'angular2/router', "./todo.list", "./todo.detail"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, todo_list_1, todo_detail_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            },
            function (todo_detail_1_1) {
                todo_detail_1 = todo_detail_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.title = 'My Todo';
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h4>{{title}}</h4>\n      </div>\n\n      <div class=\"panel-body\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { name: 'Todo', path: '/', component: todo_list_1.TodoList, useAsDefault: true },
                        { name: 'TodoDetail', path: '/:id', component: todo_detail_1.TodoDetail }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            })();
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.js.map