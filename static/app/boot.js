System.register(['angular2/platform/browser', './app', './directives/directives', 'angular2/core', "angular2/router", "angular2/http", './services/DataBaseService', './services/TodoService', './pipes/pipes'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var browser_1, app_1, directives_1, core_1, router_1, http_1, DataBaseService_1, TodoService_1, pipes_1;
    var MyRequestOptions, appConfig;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (directives_1_1) {
                directives_1 = directives_1_1;
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
            }],
        execute: function() {
            MyRequestOptions = (function (_super) {
                __extends(MyRequestOptions, _super);
                function MyRequestOptions() {
                    _super.apply(this, arguments);
                    this.headers = new http_1.Headers({ 'X-Request-With': 'XMLHttpRequest' });
                }
                return MyRequestOptions;
            })(http_1.BaseRequestOptions);
            appConfig = {
                HOST: 'http://www.angular2demo.com',
                APP_NAME: 'Angular2 Demo',
                NAV_LIST: [
                    { route: ['Todo', 'Todo'], path: '/todo' },
                    { route: ['ProfileForm'], path: '/profile-form' },
                    { route: ['Tabs'], path: '/tabs' },
                    { route: ['Modal'], path: '/modal' }
                ]
            };
            browser_1.bootstrap(app_1.Angular2Demo, [router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                DataBaseService_1.LocalDataBase,
                TodoService_1.TodoService,
                router_1.ROUTER_PROVIDERS,
                core_1.provide('appConfig', { useValue: appConfig }),
                //用自定义的requestOption替换angular黙认的requestOption
                core_1.provide('RequestOptions', { useClass: MyRequestOptions }),
                //将自定义的pipe添加到platform pipe里，这样在整应用内都可以用，而不需要在每个组件里引入
                core_1.provide(core_1.PLATFORM_PIPES, { useValue: pipes_1.CUSTOM_PIPES, multi: true }),
                //与上同
                core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: directives_1.CUSTOM_DIRECTIVES, multi: true })
            ]).then(function () {
                console.info('Application bootstrap success');
            });
        }
    }
});
//# sourceMappingURL=boot.js.map