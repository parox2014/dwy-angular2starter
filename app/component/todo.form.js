System.register(['angular2/core', "angular2/common", '../services/todoService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, todoService_1;
    var TodoForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todoService_1_1) {
                todoService_1 = todoService_1_1;
            }],
        execute: function() {
            TodoForm = (function () {
                function TodoForm(todo) {
                    this.todo = todo;
                }
                TodoForm.prototype.onFormSubmit = function (e, param) {
                    e.preventDefault();
                    e.target.reset();
                    var todo = Object.assign({
                        done: false
                    }, param);
                    this.todo.save(todo);
                };
                TodoForm.prototype.reverse = function (str) {
                    var len = str.length;
                    var result = '';
                    while (len > 0) {
                        result += str.charAt(len);
                        len--;
                    }
                };
                TodoForm = __decorate([
                    core_1.Component({
                        selector: 'todo-form',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        inputs: ['onSubmit'],
                        template: "\n    <form #f=\"ngForm\" (submit)=\"onFormSubmit($event,f.value)\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" ngControl=\"name\" autofocus>\n      </div>\n    <form>\n  "
                    }), 
                    __metadata('design:paramtypes', [todoService_1.TodoService])
                ], TodoForm);
                return TodoForm;
            })();
            exports_1("TodoForm", TodoForm);
        }
    }
});
//# sourceMappingURL=todo.form.js.map