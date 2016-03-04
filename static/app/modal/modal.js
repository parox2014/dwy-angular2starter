System.register(['angular2/core', "../app", "angular2/src/platform/dom/dom_renderer", "angular2/common", 'rxjs/Observable', "angular2/http"], function(exports_1) {
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
    var core_1, app_1, dom_renderer_1, common_1, Observable_1, http_1;
    var zone, TRANSITION_END, ModalHeader, ModalFooter, Modal, Dialog, ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (dom_renderer_1_1) {
                dom_renderer_1 = dom_renderer_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            zone = window['zone'] || {};
            TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd msTransitionEnd';
            ModalHeader = (function () {
                function ModalHeader() {
                    this.onClose = new core_1.EventEmitter();
                }
                ModalHeader.prototype.onClick = function (e) {
                    this.onClose.emit(e);
                };
                ModalHeader = __decorate([
                    core_1.Component({
                        selector: 'modal-header',
                        inputs: ['modalTitle'],
                        outputs: ['onClose'],
                        host: {
                            'class': 'modal-header',
                            'style': 'display:block',
                            'role': 'header',
                            'aria-label': 'modal-header'
                        },
                        template: "\n    <button type=\"button\" class=\"close\" aria-label=\"Close\">\n      <span aria-hidden=\"true\" (click)=\"onClick($event)\">&times;</span>\n    </button>\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalHeader);
                return ModalHeader;
            })();
            exports_1("ModalHeader", ModalHeader);
            ModalFooter = (function () {
                function ModalFooter() {
                    this.onCancel = new core_1.EventEmitter();
                    this.onConfirm = new core_1.EventEmitter();
                }
                ModalFooter.prototype.onCancelButtonClick = function (e) {
                    this.onCancel.emit(e);
                };
                ModalFooter.prototype.onConfirmButtonClick = function (e) {
                    this.onConfirm.emit(e);
                };
                ModalFooter = __decorate([
                    core_1.Component({
                        selector: 'modal-footer',
                        inputs: ['okText', 'cancelText'],
                        outputs: ['onCancel', 'onConfirm'],
                        host: {
                            'class': 'modal-footer',
                            'style': 'display:block',
                            'role': 'footer',
                            'aria-label': 'modal-footer'
                        },
                        template: "\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelButtonClick($event)\">{{cancelText}}</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onConfirmButtonClick()\">{{okText}}</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalFooter);
                return ModalFooter;
            })();
            exports_1("ModalFooter", ModalFooter);
            Modal = (function () {
                function Modal(renderer, elRef, tempRef, vcRef) {
                    this.renderer = renderer;
                    this.elRef = elRef;
                    this.tempRef = tempRef;
                    this.vcRef = vcRef;
                    this.title = 'Are you sure';
                    this.okText = 'Remove';
                    this.cancelText = 'Cancel';
                    this.showHeader = true;
                    this.showFooter = true;
                }
                Modal.prototype.ngAfterViewInit = function () {
                };
                Modal.prototype.confirm = function () {
                };
                Modal.prototype.cancel = function () {
                };
                Modal.prototype.open = function () {
                    var elRef = this.elRef;
                    var renderer = this.renderer;
                    renderer.setElementStyle(elRef, 'display', 'block');
                    zone.setTimeout(function () {
                        renderer.setElementClass(elRef, 'in', true);
                    }, 0);
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Modal.prototype, "showHeader", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Modal.prototype, "showFooter", void 0);
                Modal = __decorate([
                    core_1.Component({
                        selector: 'modal',
                        host: {
                            'class': 'modal fade',
                            'role': 'dialog'
                        },
                        directives: [common_1.COMMON_DIRECTIVES, ModalHeader, ModalFooter],
                        template: "\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <modal-header [modalTitle]=\"title\" (onClose)=\"cancel($event)\" *ngIf=\"showHeader\"></modal-header>\n\n      <div class=\"modal-body\">\n        <p>{{template}}</p>\n        <template #template></template>\n      </div>\n\n      <modal-footer *ngIf=\"showFooter\"\n        [okText]=\"okText\"\n        [cancelText]=\"cancelText\"\n        (onConfirm)=\"confirm($event)\"\n        (onCancel)=\"cancel($event)\">\n      </modal-footer>\n    </div><!-- /.modal-content -->\n  </div>\n  "
                    }),
                    __param(2, core_1.Query('template')), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, core_1.TemplateRef, core_1.ViewContainerRef])
                ], Modal);
                return Modal;
            })();
            exports_1("Modal", Modal);
            Dialog = (function () {
                function Dialog(dcl, app, injector) {
                    this.dcl = dcl;
                    this.injector = injector;
                    this.app = app;
                }
                Dialog.prototype.open = function (tempalte, option) {
                    var _this = this;
                    var injector = core_1.Injector.resolve([
                        core_1.provide(core_1.Renderer, { useClass: dom_renderer_1.DomRenderer })
                    ]);
                    return new Observable_1.Observable(function (subscriber) {
                        _this
                            .dcl
                            .loadNextToLocation(Modal, _this.app.elRef, injector)
                            .then(function (compRef) {
                            var instance = compRef.instance;
                            var oldClose = instance.close;
                            if (option) {
                                Object.assign(instance, option);
                            }
                            instance.close = function () {
                                oldClose.call(instance, function () {
                                    compRef.dispose();
                                });
                            };
                            instance.cancel = function () {
                                this.close();
                                subscriber.next(false);
                                subscriber.complete();
                            };
                            instance.confirm = function () {
                                this.close();
                                subscriber.next(true);
                                subscriber.complete();
                            };
                            instance.template = tempalte;
                            instance.open();
                        })
                            .catch(function (err) {
                            subscriber.error(err);
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
                function ModalComponent(dialog, http) {
                    this.dialog = dialog;
                    this.http = http;
                }
                ModalComponent.prototype.onBtnClick = function () {
                    this.dialog
                        .open('Are you sure suck my dick?')
                        .subscribe(function (result) {
                        if (result) {
                            zone.alert('you suck');
                        }
                        else {
                            zone.alert('you do not suck');
                        }
                    });
                };
                ModalComponent = __decorate([
                    core_1.Component({
                        selector: 'modal-component',
                        providers: [Dialog],
                        directives: [Modal],
                        template: "\n    <button class=\"btn btn-primary\" (click)=\"onBtnClick()\">Open Modal</button>\n    <h1>{{data}}</h1>\n  "
                    }), 
                    __metadata('design:paramtypes', [Dialog, http_1.Http])
                ], ModalComponent);
                return ModalComponent;
            })();
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=modal.js.map