System.register(['angular2/core', 'angular2/common', '../validators/validators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, validators_1;
    var EmailRequiredDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            EmailRequiredDirective = (function () {
                function EmailRequiredDirective() {
                }
                EmailRequiredDirective = __decorate([
                    core_1.Directive({
                        selector: '[email-required]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useValue: validators_1.Validators.emailValidator, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailRequiredDirective);
                return EmailRequiredDirective;
            })();
            exports_1("EmailRequiredDirective", EmailRequiredDirective);
        }
    }
});
//# sourceMappingURL=directives.js.map