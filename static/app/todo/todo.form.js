System.register(['angular2/core', "angular2/common", '../directives/directives'], function(exports_1) {
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
    var TodoModel, TodoForm;
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
            TodoModel = (function () {
                function TodoModel(todo) {
                    this.done = false;
                    Object.assign(this, todo);
                }
                return TodoModel;
            })();
            TodoForm = (function () {
                function TodoForm() {
                    this.formSubmit = new core_1.EventEmitter();
                    this.formModel = new common_1.ControlGroup({
                        name: new common_1.Control('example')
                    });
                }
                TodoForm.prototype.onFormSubmit = function (e) {
                    e.target.reset();
                    if (!this.formModel.value.name) {
                        return;
                    }
                    var todo = new TodoModel(this.formModel.value);
                    this.formSubmit.emit(todo);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoForm.prototype, "formSubmit", void 0);
                TodoForm = __decorate([
                    core_1.Component({
                        selector: 'todo-form',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, directives_1.AutoFocus, directives_1.AutoSelect],
                        template: "\n    <form [ngFormModel]=\"formModel\" (submit)=\"onFormSubmit($event)\" novalidate>\n      <div class=\"input-group\">\n        <input type=\"text\" required class=\"form-control\" ngControl=\"name\" auto-focus auto-select>\n        <span class=\"input-group-btn\">\n         <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!formModel.valid\">Create</button>\n        </span>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"formModel.controls['name'].hasError('required')\">\n        Todo name required\n      </div>\n    <form>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoForm);
                return TodoForm;
            })();
            exports_1("TodoForm", TodoForm);
        }
    }
});
//# sourceMappingURL=todo.form.js.map