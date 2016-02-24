System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyDate, CUSTOM_PIPES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyDate = (function () {
                function MyDate() {
                }
                MyDate.prototype.transform = function (date, args) {
                    return window['moment'](date).format(args[0] || 'YYYY-MM-DD HH:mm');
                };
                MyDate = __decorate([
                    core_1.Pipe({ name: 'myDate' }), 
                    __metadata('design:paramtypes', [])
                ], MyDate);
                return MyDate;
            })();
            exports_1("MyDate", MyDate);
            exports_1("CUSTOM_PIPES", CUSTOM_PIPES = [MyDate]);
        }
    }
});
//# sourceMappingURL=pipes.js.map