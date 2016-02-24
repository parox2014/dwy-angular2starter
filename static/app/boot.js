System.register(['angular2/platform/browser', 'angular2/core', "angular2/router", "angular2/http", './services/DataBaseService', './services/TodoService', './pipes/pipes', './form/profile.form', "./todo/todo", "./tabs/tabs"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, http_1, DataBaseService_1, TodoService_1, pipes_1, profile_form_1, todo_1, tabs_1;
    var Angular2Demo, MyRequestOptions;
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
            function (DataBaseService_1_1) {
                DataBaseService_1 = DataBaseService_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            },
            function (profile_form_1_1) {
                profile_form_1 = profile_form_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            }],
        execute: function() {
            Angular2Demo = (function () {
                function Angular2Demo() {
                    this.title = 'Angular2 Demo';
                    this.navList = [['Todo', 'Todo'], ['ProfileForm'], ['Tabs']];
                }
                Angular2Demo = __decorate([
                    core_1.Component({
                        selector: "angular2-demo",
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <nav class=\"navbar navbar-diy\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <div class=\"navbar-brand\">\n            <a href=\"#/\">\n              {{title}}\n            </a>\n          </div>\n        </div>\n\n        <ul class=\"nav navbar-nav\">\n          <li *ngFor=\"#nav of navList\">\n            <a [routerLink]=\"nav\">{{nav[0]}}</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  <div class=\"container\">\n    <!--\u58F0\u660E\u8DEF\u7531\u51FA\u53E3-->\n    <router-outlet></router-outlet>\n  </div>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: "/todo/...", component: todo_1.TodoComponent, name: "Todo", useAsDefault: true },
                        { path: "/profile-form", component: profile_form_1.ProfileForm, name: "ProfileForm" },
                        { path: "/tabs", component: tabs_1.TabComponent, name: "Tabs" },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Angular2Demo);
                return Angular2Demo;
            })();
            MyRequestOptions = (function (_super) {
                __extends(MyRequestOptions, _super);
                function MyRequestOptions() {
                    _super.apply(this, arguments);
                    this.headers = new http_1.Headers({ 'X-Request-With': 'XMLHttpRequest' });
                }
                return MyRequestOptions;
            })(http_1.BaseRequestOptions);
            core_1.enableProdMode();
            browser_1.bootstrap(Angular2Demo, [router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                DataBaseService_1.LocalDataBase,
                TodoService_1.TodoService,
                browser_1.BrowserDomAdapter,
                core_1.provide(http_1.RequestOptions, { useClass: MyRequestOptions }),
                core_1.provide(core_1.PLATFORM_PIPES, { useValue: pipes_1.CUSTOM_PIPES, multi: true })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map