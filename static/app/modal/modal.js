System.register(['angular2/core', '../form/profile.form', "../app", "angular2/src/platform/dom/dom_renderer", "angular2/common"], function(exports_1) {
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
    var core_1, profile_form_1, app_1, dom_renderer_1, common_1;
    var TRANSITION_END, Modal, counter, Dialog, ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_form_1_1) {
                profile_form_1 = profile_form_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (dom_renderer_1_1) {
                dom_renderer_1 = dom_renderer_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd msTransitionEnd';
            Modal = (function () {
                function Modal(renderer, elRef, vcRef) {
                    this.renderer = renderer;
                    this.elRef = elRef;
                    this.vcRef = vcRef;
                    this.title = 'Are you sure';
                    this.okText = 'Remove';
                    this.cancelText = 'Cancel';
                }
                Modal.prototype.setTitle = function (title) {
                    this.title = title;
                    return this;
                };
                Modal.prototype.open = function () {
                    var elRef = this.elRef;
                    var renderer = this.renderer;
                    renderer.setElementStyle(elRef, 'display', 'block');
                    setTimeout(function () {
                        renderer.setElementClass(elRef, 'in', true);
                    }, 50);
                };
                Modal.prototype.close = function (callback) {
                    var _this = this;
                    var renderer = this.renderer;
                    var elRef = this.elRef;
                    var onTransitionEnd = function () {
                        callback();
                        _this.off(TRANSITION_END, onTransitionEnd);
                    };
                    this.on(TRANSITION_END, onTransitionEnd);
                    renderer.setElementClass(elRef, 'in', false);
                };
                Modal.prototype.on = function (evtName, listener) {
                    this.handleEventListener(evtName, listener);
                };
                Modal.prototype.off = function (evtName, listener) {
                    this.handleEventListener(evtName, listener, 'removeEventListener');
                };
                Modal.prototype.handleEventListener = function (evtName, listener, method) {
                    if (method === void 0) { method = 'addEventListener'; }
                    var evts = evtName.split(/\s|,|;/);
                    var renderer = this.renderer;
                    var elRef = this.elRef;
                    evts.forEach(function (evt) {
                        renderer.invokeElementMethod(elRef, method, [evt, listener]);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Modal.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Modal.prototype, "okText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Modal.prototype, "cancelText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Modal.prototype, "tempalte", void 0);
                Modal = __decorate([
                    core_1.Component({
                        selector: 'modal',
                        host: {
                            'class': 'modal fade',
                            'role': 'dialog'
                        },
                        directives: [common_1.COMMON_DIRECTIVES, profile_form_1.ProfileForm],
                        template: "\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"cancel()\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">{{title}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{template}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">{{cancelText}}</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{okText}}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, core_1.ViewContainerRef])
                ], Modal);
                return Modal;
            })();
            exports_1("Modal", Modal);
            counter = 0;
            Dialog = (function () {
                function Dialog(dcl, app, injector) {
                    this.dcl = dcl;
                    this.injector = injector;
                    this.app = app;
                }
                Dialog.prototype.open = function (tempalte) {
                    var _this = this;
                    counter += 1;
                    var id = "dialog-" + counter;
                    var injector = core_1.Injector.resolve([
                        core_1.provide(core_1.Renderer, { useClass: dom_renderer_1.DomRenderer }),
                        core_1.provide(core_1.TemplateRef, { useClass: core_1.TemplateRef })
                    ]);
                    return new Promise(function (resolve, reject) {
                        _this
                            .dcl
                            .loadNextToLocation(Modal, _this.app.elRef, injector)
                            .then(function (compRef) {
                            var instance = compRef.instance;
                            var oldClose = instance.close;
                            instance.close = function () {
                                oldClose.call(instance, function () {
                                    compRef.dispose();
                                });
                            };
                            instance.cancel = function () {
                                this.close();
                                resolve(false);
                            };
                            instance.confirm = function () {
                                this.close();
                                resolve(true);
                            };
                            instance.template = tempalte;
                            instance.open();
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                Dialog = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject(core_1.forwardRef(function () { return app_1.Angular2Demo; }))), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, app_1.Angular2Demo, core_1.Injector])
                ], Dialog);
                return Dialog;
            })();
            exports_1("Dialog", Dialog);
            ModalComponent = (function () {
                function ModalComponent(dialog) {
                    this.dialog = dialog;
                }
                ModalComponent.prototype.onBtnClick = function () {
                    this.dialog.open('Are you sure to remove this todo?')
                        .then(function (result) {
                        if (result) {
                            alert('you confirmed');
                        }
                        else {
                            alert('you canceled');
                        }
                    })
                        .catch(function (err) {
                    });
                };
                ModalComponent = __decorate([
                    core_1.Component({
                        selector: 'modal-component',
                        providers: [Dialog],
                        template: "\n    <button class=\"btn btn-primary\" (click)=\"onBtnClick()\">Open Modal</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [Dialog])
                ], ModalComponent);
                return ModalComponent;
            })();
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=modal.js.map