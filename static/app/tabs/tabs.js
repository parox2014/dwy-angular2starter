System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common', '../form/profile.form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1, profile_form_1;
    var TabHeader, TabPane, Tabs, TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (profile_form_1_1) {
                profile_form_1 = profile_form_1_1;
            }],
        execute: function() {
            TabHeader = (function () {
                function TabHeader(eleRef, dom) {
                    this.eleRef = eleRef;
                    this.dom = dom;
                    this.tabList = [];
                    this.itemClass = '';
                    this.align = '';
                    this.itemClick = new core_1.EventEmitter();
                }
                TabHeader.prototype.ngOnInit = function () {
                    var el = this.eleRef.nativeElement;
                    this.dom.setStyle(el, 'display', 'block');
                    if (this.align) {
                        this.dom.addClass(el, 'nav-' + this.align);
                    }
                };
                TabHeader.prototype.onTabItemClick = function (tab) {
                    tab.isActive = true;
                    this.tabList.forEach(function (item) {
                        if (item.name != tab.name) {
                            item.isActive = false;
                        }
                    });
                    this.itemClick.emit(tab);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TabHeader.prototype, "tabList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TabHeader.prototype, "itemClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TabHeader.prototype, "align", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TabHeader.prototype, "itemClick", void 0);
                TabHeader = __decorate([
                    core_1.Component({
                        selector: 'tab-header',
                        directives: [common_1.CORE_DIRECTIVES, common_1.COMMON_DIRECTIVES],
                        host: {
                            'class': 'nav nav-tabs',
                            'role': 'tablist'
                        },
                        template: "\n    <li role=\"presentation\"\n      *ngFor=\"#tab of tabList\"\n      [class]=\"itemClass?itemClass:''\"\n       (click)=\"onTabItemClick(tab)\"\n      [class.active]=\"tab.isActive\">\n      <a href=\"javascript:;\" role=\"tab\">{{tab.name}}</a>\n    </li>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, browser_1.BrowserDomAdapter])
                ], TabHeader);
                return TabHeader;
            })();
            TabPane = (function () {
                function TabPane(elementRef, browserDom) {
                    this.elementRef = elementRef;
                    this.browserDom = browserDom;
                    this.nativeElement = elementRef.nativeElement;
                }
                TabPane.prototype.show = function () {
                    var _this = this;
                    this.browserDom.addClass(this.nativeElement, 'active');
                    setTimeout(function () {
                        _this.browserDom.addClass(_this.nativeElement, 'in');
                    }, 100);
                };
                TabPane.prototype.hide = function () {
                    this.browserDom.removeClass(this.nativeElement, 'in');
                    this.browserDom.removeClass(this.nativeElement, 'active');
                };
                TabPane = __decorate([
                    core_1.Component({
                        selector: 'tab-pane',
                        host: {
                            'class': 'tab-pane fade',
                            'role': 'tabpanel'
                        },
                        template: "\n    <ng-content></ng-content>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, browser_1.BrowserDomAdapter])
                ], TabPane);
                return TabPane;
            })();
            Tabs = (function () {
                function Tabs() {
                    this.tabList = [];
                    this.tabActive = new core_1.EventEmitter();
                }
                Tabs.prototype.ngAfterContentInit = function () {
                    this.onTabClick(this.getActiveTab());
                };
                Tabs.prototype.getActiveTab = function () {
                    var tabList = this.tabList;
                    var len = tabList.length;
                    var i = 0;
                    var tab;
                    for (; i < len; i++) {
                        tab = tabList[i];
                        if (tab.isActive) {
                            break;
                        }
                    }
                    return tab;
                };
                Tabs.prototype.onTabClick = function (tab) {
                    var index = this.tabList.indexOf(tab);
                    this.activeTabPaneByIndex(index);
                    this.tabActive.emit(tab);
                };
                Tabs.prototype.activeTabPaneByIndex = function (index) {
                    this.tabPane.toArray().forEach(function (tabPane, i) {
                        var method = index === i ? 'show' : 'hide';
                        tabPane[method]();
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Tabs.prototype, "tabList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Tabs.prototype, "itemClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Tabs.prototype, "tabAlign", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Tabs.prototype, "tabActive", void 0);
                __decorate([
                    core_1.ContentChildren(TabPane), 
                    __metadata('design:type', core_1.QueryList)
                ], Tabs.prototype, "tabPane", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        directives: [TabHeader],
                        host: {
                            'style': 'display:block'
                        },
                        template: "\n  <tab-header [tabList]=\"tabList\"\n    [itemClass]=\"itemClass\"\n    [align]=\"tabAlign\"\n    (itemClick)=\"onTabClick($event)\"></tab-header>\n  <div class=\"tab-content\">\n    <ng-content></ng-content>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            })();
            exports_1("Tabs", Tabs);
            TabComponent = (function () {
                function TabComponent() {
                    this.tabs = [
                        { name: 'profile', isActive: true },
                        { name: 'todos', isActive: false },
                        { name: 'message', isActive: false },
                        { name: 'settings', isActive: false }
                    ];
                    this.secondTabs = [
                        { name: 'tab1', isActive: false },
                        { name: 'tab2', isActive: true },
                        { name: 'tab3', isActive: false },
                        { name: 'tab4', isActive: false }
                    ];
                }
                TabComponent.prototype.onTabActive = function (tab) {
                    this.currentTab = tab;
                    console.log(tab);
                };
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab-comp',
                        directives: [Tabs, TabPane, profile_form_1.ProfileForm, common_1.CORE_DIRECTIVES],
                        template: "\n    <div class=\"well well-lg\">current tab is:{{currentTab|json}}</div>\n    <br>\n    <tabs [tabList]=\"tabs\" [tabAlign]=\"'justified'\" (tabActive)=\"onTabActive($event)\">\n\n      <tab-pane>\n        <profile-form></profile-form>\n      </tab-pane>\n      <tab-pane>\n        <h1>Todo</h1>\n      </tab-pane>\n      <tab-pane>\n        <h1>message</h1>\n      </tab-pane>\n      <tab-pane>\n        <h1>settings</h1>\n      </tab-pane>\n    </tabs>\n\n    <tabs [tabList]=\"secondTabs\" (tabActive)=\"onTabActive($event)\">\n\n      <tab-pane *ngFor=\"#tab of secondTabs\">\n        <h1>{{tab.name}}</h1>\n      </tab-pane>\n\n    </tabs>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabComponent);
                return TabComponent;
            })();
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=tabs.js.map