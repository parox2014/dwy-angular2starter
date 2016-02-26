System.register(['angular2/core', 'angular2/common', '../AnimationComponent'], function(exports_1) {
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
    var core_1, common_1, AnimationComponent_1;
    var ProfileForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (AnimationComponent_1_1) {
                AnimationComponent_1 = AnimationComponent_1_1;
            }],
        execute: function() {
            ProfileForm = (function (_super) {
                __extends(ProfileForm, _super);
                function ProfileForm(fb, elRef, renderer) {
                    _super.call(this, elRef, renderer);
                    this.elRef = elRef;
                    this.renderer = renderer;
                    this.profile = {};
                    this.animation = 'slide';
                    this.direction = 'leftToRight';
                    var form = this.profileForm = fb.group({
                        email: [''],
                        nickName: [''],
                        gender: ['female'],
                        age: [18]
                    });
                    renderer.setElementStyle(elRef, 'display', 'block');
                    this.emailCtrl = form.controls['email'];
                    this.nickNameCtrl = form.controls['nickName'];
                    this.genderCtrl = form.controls['gender'];
                    this.age = form.controls['age'];
                }
                Object.defineProperty(ProfileForm.prototype, "value", {
                    get: function () {
                        return this.profileForm.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProfileForm.prototype.onSubmit = function () {
                    console.log(this.value);
                };
                ProfileForm = __decorate([
                    core_1.Component({
                        selector: 'profile-form',
                        directives: [
                            common_1.COMMON_DIRECTIVES
                        ],
                        templateUrl: 'app/form/profile-form.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, core_1.ElementRef, core_1.Renderer])
                ], ProfileForm);
                return ProfileForm;
            })(AnimationComponent_1.AnimationComponent);
            exports_1("ProfileForm", ProfileForm);
        }
    }
});
//# sourceMappingURL=profile.form.js.map