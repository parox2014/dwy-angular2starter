System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var any, EMAIL_REG, EmailRequiredDirective, NumberRequired, AgeRequired, AutoFocus, AutoSelect, CUSTOM_DIRECTIVES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            EMAIL_REG = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            EmailRequiredDirective = (function () {
                function EmailRequiredDirective() {
                }
                EmailRequiredDirective.prototype.validate = function (c) {
                    var isEmail = EMAIL_REG.test(c.value);
                    return isEmail || c.value === '' ? null : { email: true };
                };
                EmailRequiredDirective = __decorate([
                    core_1.Directive({
                        selector: 'input[type=email],input[email]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: EmailRequiredDirective, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailRequiredDirective);
                return EmailRequiredDirective;
            })();
            exports_1("EmailRequiredDirective", EmailRequiredDirective);
            NumberRequired = (function () {
                function NumberRequired() {
                }
                NumberRequired.prototype.validate = function (c) {
                    var val = c.value;
                    return typeof (val) === 'number' && !Number.isNaN(val) ? null : { number: true };
                };
                NumberRequired = __decorate([
                    core_1.Directive({
                        selector: 'input[type=number]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: NumberRequired, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NumberRequired);
                return NumberRequired;
            })();
            exports_1("NumberRequired", NumberRequired);
            AgeRequired = (function () {
                function AgeRequired() {
                }
                AgeRequired.prototype.validate = function (c) {
                    var val = c.value;
                    return val > 0 && val < 100 ? null : { age: true };
                };
                AgeRequired = __decorate([
                    core_1.Directive({
                        selector: 'input[age],input[name=age]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: AgeRequired, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AgeRequired);
                return AgeRequired;
            })();
            exports_1("AgeRequired", AgeRequired);
            AutoFocus = (function () {
                function AutoFocus(elRef, renderer) {
                    this.elRef = elRef;
                    this.renderer = renderer;
                }
                AutoFocus.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.renderer.invokeElementMethod(_this.elRef, 'focus', []);
                    }, 50);
                };
                AutoFocus = __decorate([
                    core_1.Directive({
                        selector: 'input[auto-focus]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoFocus);
                return AutoFocus;
            })();
            exports_1("AutoFocus", AutoFocus);
            AutoSelect = (function () {
                function AutoSelect(elRef, renderer) {
                    this.elRef = elRef;
                    this.renderer = renderer;
                }
                AutoSelect.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.renderer.invokeElementMethod(_this.elRef, 'select', []);
                    }, 50);
                };
                AutoSelect = __decorate([
                    core_1.Directive({
                        selector: 'input[auto-select]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoSelect);
                return AutoSelect;
            })();
            exports_1("AutoSelect", AutoSelect);
            exports_1("CUSTOM_DIRECTIVES", CUSTOM_DIRECTIVES = [
                EmailRequiredDirective,
                NumberRequired,
                AgeRequired,
                AutoFocus,
                AutoSelect
            ]);
        }
    }
});
//# sourceMappingURL=directives.js.map