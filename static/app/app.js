System.register(['angular2/core', "angular2/router", './form/profile.form', "./todo/todo", "./tabs/tabs", './modal/modal'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, profile_form_1, todo_1, tabs_1, modal_1;
    var Angular2Demo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_form_1_1) {
                profile_form_1 = profile_form_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            }],
        execute: function() {
            Angular2Demo = (function () {
                function Angular2Demo(appConfig, elRef) {
                    this.elRef = elRef;
                    this.title = appConfig.APP_NAME;
                    this.navList = appConfig.NAV_LIST;
                }
                Angular2Demo = __decorate([
                    core_1.Component({
                        selector: "angular2-demo",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <nav class=\"navbar navbar-diy\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <div class=\"navbar-brand\">\n            <a href=\"#/\">\n              {{title}}\n            </a>\n          </div>\n        </div>\n\n        <ul class=\"nav navbar-nav\">\n          <li *ngFor=\"#nav of navList\">\n            <a [routerLink]=\"nav\">{{nav[0]}}</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  <div class=\"container\">\n    <!--\u58F0\u660E\u8DEF\u7531\u51FA\u53E3-->\n    <router-outlet></router-outlet>\n  </div>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: "/todo/...", component: todo_1.TodoComponent, name: "Todo", useAsDefault: true },
                        { path: "/profile-form", component: profile_form_1.ProfileForm, name: "ProfileForm" },
                        { path: "/tabs", component: tabs_1.TabComponent, name: "Tabs" },
                        { path: "/modal", component: modal_1.ModalComponent, name: "Modal" }
                    ]),
                    __param(0, core_1.Inject('appConfig')), 
                    __metadata('design:paramtypes', [Object, core_1.ElementRef])
                ], Angular2Demo);
                return Angular2Demo;
            })();
            exports_1("Angular2Demo", Angular2Demo);
        }
    }
});
//# sourceMappingURL=app.js.map