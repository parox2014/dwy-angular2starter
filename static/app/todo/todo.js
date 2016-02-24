System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', "./todo.list", "./todo.detail"], function(exports_1) {
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
    var core_1, browser_1, router_1, todo_list_1, todo_detail_1;
    var BaseComponent, TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
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
            BaseComponent = (function () {
                function BaseComponent(elRef, dom) {
                    this.dom = dom;
                    this.elRef = elRef;
                    this.dom.addClass(this.elRef.nativeElement, 'fade');
                }
                BaseComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.dom.addClass(_this.elRef.nativeElement, 'in');
                    }, 100);
                };
                BaseComponent.prototype.routerCanDeactivate = function () {
                    this.dom.removeClass(this.elRef.nativeElement, 'in');
                };
                return BaseComponent;
            })();
            TodoComponent = (function (_super) {
                __extends(TodoComponent, _super);
                function TodoComponent(elRef, dom) {
                    _super.call(this, elRef, dom);
                    this.elRef = elRef;
                    this.dom = dom;
                    this.title = 'My Todo';
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        host: {
                            'class': 'panel panel-default',
                            'style': 'display:block'
                        },
                        template: "\n    <div class=\"panel-heading\">\n      <h4>{{title}}</h4>\n    </div>\n\n    <div class=\"panel-body\">\n      <router-outlet></router-outlet>\n    </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { name: 'Todo', path: '/', component: todo_list_1.TodoList, useAsDefault: true },
                        { name: 'TodoDetail', path: '/:id', component: todo_detail_1.TodoDetail }
                    ]), 
                    __metadata('design:paramtypes', [core_1.ElementRef, browser_1.BrowserDomAdapter])
                ], TodoComponent);
                return TodoComponent;
            })(BaseComponent);
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.js.map