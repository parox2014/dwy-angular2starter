System.register(['angular2/platform/browser', 'angular2/core', "angular2/router", "angular2/http", './services/TodoService', './todo/todo.list', './todo/todo.detail', './form/profile.form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, http_1, TodoService_1, todo_list_1, todo_detail_1, profile_form_1;
    var Angular2Demo;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            },
            function (todo_detail_1_1) {
                todo_detail_1 = todo_detail_1_1;
            },
            function (profile_form_1_1) {
                profile_form_1 = profile_form_1_1;
            }],
        execute: function() {
            Angular2Demo = (function () {
                function Angular2Demo(router, locationStrategy) {
                    this.router = router;
                    this.locationStrategy = locationStrategy;
                    this.title = 'Angular2 Demo';
                    this.navList = ['Todo', 'ProfileForm'];
                }
                Angular2Demo = __decorate([
                    core_1.Component({
                        selector: "angular2-demo",
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <nav class=\"navbar\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <div class=\"navbar-brand\">\n            <a href=\"#/\">\n              {{title}}\n            </a>\n          </div>\n        </div>\n\n        <ul class=\"nav navbar-nav\">\n          <li *ngFor=\"#nav of navList\">\n            <a [routerLink]=\"[nav]\">{{nav}}</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  <div class=\"container\">\n    <!--\u58F0\u660E\u8DEF\u7531\u51FA\u53E3-->\n    <router-outlet></router-outlet>\n  </div>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: "/todo", component: todo_list_1.TodoList, name: "Todo", useAsDefault: true },
                        { path: "/todo/:id", component: todo_detail_1.TodoDetail, name: "TodoDetail" },
                        { path: "/profile-form", component: profile_form_1.ProfileForm, name: "ProfileForm" }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.LocationStrategy])
                ], Angular2Demo);
                return Angular2Demo;
            })();
            browser_1.bootstrap(Angular2Demo, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, TodoService_1.TodoService]);
        }
    }
});
//# sourceMappingURL=boot.js.map