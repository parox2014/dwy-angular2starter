System.register([], function(exports_1) {
    var EMAIL_REG, Validators;
    return {
        setters:[],
        execute: function() {
            EMAIL_REG = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            Validators = (function () {
                function Validators() {
                }
                Validators.emailValidator = function (c) {
                    var isEmail = EMAIL_REG.test(c.value);
                    return isEmail || c.value === '' ? null : { email: true };
                };
                return Validators;
            })();
            exports_1("Validators", Validators);
        }
    }
});
//# sourceMappingURL=validators.js.map