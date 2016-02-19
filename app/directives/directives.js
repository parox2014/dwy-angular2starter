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
    var EMAIL_REG, EmailValidatorDirective;
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
            EmailValidatorDirective = (function () {
                function EmailValidatorDirective() {
                }
                EmailValidatorDirective.prototype.validate = function (c) {
                    var isEmail = EMAIL_REG.test(c.value);
                    return isEmail ? null : { email: true };
                };
                EmailValidatorDirective = __decorate([
                    core_1.Directive({
                        selector: '[email-required]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: EmailValidatorDirective, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailValidatorDirective);
                return EmailValidatorDirective;
            })();
            exports_1("EmailValidatorDirective", EmailValidatorDirective);
        }
    }
});
//# sourceMappingURL=directives.js.map