System.register(['angular2/core', 'angular2/common', '../form/profile.form', '../AnimationComponent'], function(exports_1) {
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
    var core_1, common_1, profile_form_1, AnimationComponent_1;
    var TabPane, Tabs, TabComponent;
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
            },
            function (AnimationComponent_1_1) {
                AnimationComponent_1 = AnimationComponent_1_1;
            }],
        execute: function() {
            TabPane = (function () {
                function TabPane(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this.isActive = false;
                }
                TabPane.prototype.show = function () {
                    var _this = this;
                    this._renderer.setElementClass(this._elRef, 'active', true);
                    setTimeout(function () {
                        _this._renderer.setElementClass(_this._elRef, 'in', true);
                    }, 50);
                    this.isActive = true;
                };
                TabPane.prototype.hide = function () {
                    this._renderer.setElementClass(this._elRef, 'active', false);
                    this._renderer.setElementClass(this._elRef, 'in', false);
                    this.isActive = false;
                };
                TabPane = __decorate([
                    core_1.Component({
                        selector: 'tab-pane',
                        directives: [common_1.COMMON_DIRECTIVES],
                        inputs: ['heading', 'isActive'],
                        host: {
                            'class': 'tab-pane fade',
                            'role': 'tabpanel'
                        },
                        template: "\n    <ng-content></ng-content>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], TabPane);
                return TabPane;
            })();
            exports_1("TabPane", TabPane);
            Tabs = (function () {
                function Tabs() {
                    this.tabActive = new core_1.EventEmitter();
                }
                Tabs.prototype.ngAfterContentInit = function () {
                    this.onTabItemClick(this.getActivePane());
                };
                Tabs.prototype.getActivePane = function () {
                    var panes = this.panes.toArray();
                    var len = this.panes.length;
                    var i = 0;
                    var pane;
                    for (; i < len; i++) {
                        pane = panes[i];
                        if (pane.isActive) {
                            break;
                        }
                    }
                    return pane;
                };
                Tabs.prototype.onTabItemClick = function (pane) {
                    pane.show();
                    this.panes.toArray().forEach(function (item) {
                        if (item != pane) {
                            item.hide();
                        }
                    });
                    this.tabActive.emit(pane);
                };
                __decorate([
                    core_1.ContentChildren(TabPane), 
                    __metadata('design:type', core_1.QueryList)
                ], Tabs.prototype, "panes", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        directives: [common_1.COMMON_DIRECTIVES],
                        inputs: ['itemClass', 'tabAlign'],
                        outputs: ['tabActive'],
                        host: {
                            'style': 'display:block'
                        },
                        template: "\n  <ul class=\"nav nav-tabs nav-{{tabAlign}}\" role=\"tablist\">\n    <li role=\"presentation\"\n      *ngFor=\"#pane of panes\"\n      [class]=\"itemClass?itemClass:''\"\n      (click)=\"onTabItemClick(pane)\"\n      [class.active]=\"pane.isActive\">\n      <a href=\"javascript:;\" role=\"tab\">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <ng-content></ng-content>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            })();
            exports_1("Tabs", Tabs);
            //使用方法
            TabComponent = (function (_super) {
                __extends(TabComponent, _super);
                function TabComponent(elRef, renderer) {
                    _super.call(this, elRef, renderer);
                    this.elRef = elRef;
                    this.renderer = renderer;
                    this.animation = 'slide';
                    this.direction = 'leftToRight';
                }
                TabComponent.prototype.onTabActive = function (pane) {
                    this.currentPane = pane;
                };
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab-comp',
                        directives: [Tabs, TabPane, profile_form_1.ProfileForm, common_1.COMMON_DIRECTIVES],
                        host: {
                            'style': 'display:block'
                        },
                        template: "\n    <div class=\"well\">current tab is:{{currentPane?currentPane.heading:''}}</div>\n    <br>\n    <tabs (tabActive)=\"onTabActive($event)\">\n\n      <tab-pane [heading]=\"'Profile Form'\" [isActive]=\"true\">\n        <profile-form></profile-form>\n      </tab-pane>\n      <tab-pane [heading]=\"'Todo'\">\n        <h1>Todo</h1>\n      </tab-pane>\n      <tab-pane [heading]=\"'Message'\">\n        <h1>message</h1>\n      </tab-pane>\n      <tab-pane [heading]=\"'Settings'\">\n        <h1>settings</h1>\n      </tab-pane>\n\n    </tabs>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], TabComponent);
                return TabComponent;
            })(AnimationComponent_1.AnimationComponent);
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=tabs.js.map