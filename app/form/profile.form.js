System.register(['angular2/core', 'angular2/common', '../directives/directives'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, directives_1;
    var ProfileForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (directives_1_1) {
                directives_1 = directives_1_1;
            }],
        execute: function() {
            ProfileForm = (function () {
                function ProfileForm(fb) {
                    this.profile = {};
                    var form = this.profileForm = fb.group({
                        email: [''],
                        nickName: [''],
                        gender: ['female']
                    });
                    this.emailCtrl = form.controls['email'];
                    this.nickNameCtrl = form.controls['nickName'];
                    this.genderCtrl = form.controls['gender'];
                }
                ProfileForm.prototype.onSubmit = function () {
                    console.log(this.profileForm.value);
                };
                ProfileForm = __decorate([
                    core_1.Component({
                        selector: 'profile-form',
                        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, directives_1.EmailRequiredDirective],
                        templateUrl: 'app/form/profile-form.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ProfileForm);
                return ProfileForm;
            })();
            exports_1("ProfileForm", ProfileForm);
        }
    }
});
//# sourceMappingURL=profile.form.js.map