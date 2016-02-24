System.register(['angular2/core', 'angular2/common', '../form/profile.form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, profile_form_1;
    var TabHeader, Tabs, TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (profile_form_1_1) {
                profile_form_1 = profile_form_1_1;
            }],
        execute: function() {
            TabHeader = (function () {
                function TabHeader() {
                    this.tabList = [];
                    this.itemClass = '';
                    this.itemClick = new core_1.EventEmitter();
                }
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
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TabHeader.prototype, "itemClick", void 0);
                TabHeader = __decorate([
                    core_1.Component({
                        selector: 'tab-header',
                        directives: [common_1.CORE_DIRECTIVES, common_1.COMMON_DIRECTIVES],
                        template: "\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li role=\"presentation\"\n        *ngFor=\"#tab of tabList\"\n        [class]=\"itemClass?itemClass:''\"\n         (click)=\"onTabItemClick(tab)\"\n        [class.active]=\"tab.isActive\">\n          <a href=\"javascript:;\" role=\"tab\" data-toggle=\"tab\">{{tab.name}}</a>\n        </li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabHeader);
                return TabHeader;
            })();
            Tabs = (function () {
                function Tabs(erf) {
                    this.erf = erf;
                    this.tabList = [];
                    this.tabActive = new core_1.EventEmitter();
                    var tabContent = erf.nativeElement.querySelector('.tab-content');
                    this.tabPane = [].slice.call(tabContent.children);
                }
                Tabs.prototype.ngOnInit = function () {
                    this.setTabPaneClassAndAttr();
                    this.onTabClick(this.getActiveTab());
                };
                Tabs.prototype.getActiveTab = function () {
                    var tabList = this.tabList;
                    var len = tabList.length;
                    for (var i = 0; i < len; i++) {
                        if (tabList[i].isActive) {
                            break;
                        }
                    }
                    return tabList[i];
                };
                Tabs.prototype.setTabPaneClassAndAttr = function () {
                    this.tabPane.forEach(function (item) {
                        item.classList.add('tab-pane');
                        item.setAttribute('role', 'tabpanel');
                    });
                };
                Tabs.prototype.onTabClick = function (tab) {
                    var index = this.tabList.indexOf(tab);
                    this.activeTabPaneByIndex(index);
                    this.tabActive.emit(tab);
                };
                Tabs.prototype.activeTabPaneByIndex = function (index) {
                    this.tabPane.forEach(function (el) {
                        el.classList.remove('active');
                    });
                    this.tabPane[index].classList.add('active');
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
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Tabs.prototype, "tabActive", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        directives: [TabHeader],
                        template: "\n  <tab-header [tabList]=\"tabList\" [itemClass]=\"itemClass\" (itemClick)=\"onTabClick($event)\"></tab-header>\n  <div class=\"tab-content\">\n    <ng-content></ng-content>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Tabs);
                return Tabs;
            })();
            exports_1("Tabs", Tabs);
            TabComponent = (function () {
                function TabComponent() {
                    this.tabs = [
                        { name: 'profile', isActive: false },
                        { name: 'todos', isActive: false },
                        { name: 'message', isActive: true },
                        { name: 'settings', isActive: false }
                    ];
                }
                TabComponent.prototype.onTabActive = function (tab) {
                    console.log(tab);
                };
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab-comp',
                        directives: [Tabs, profile_form_1.ProfileForm],
                        template: "\n    <tabs [tabList]=\"tabs\" (tabActive)=\"onTabActive($event,index)\">\n\n      <profile-form></profile-form>\n\n      <div class=\"bg-info\">\n        <h1>Todo</h1>\n      </div>\n      <div>\n        <h1>message</h1>\n      </div>\n      <div>\n        <h1>settings</h1>\n      </div>\n    </tabs>\n  "
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