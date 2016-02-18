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
    var TodoFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoFilter = (function () {
                function TodoFilter() {
                    this.filterChange = new core_1.EventEmitter();
                    this.filters = [
                        { name: 'All', checked: false },
                        { name: 'Done', checked: false },
                        { name: 'Undone', checked: false }
                    ];
                }
                Object.defineProperty(TodoFilter.prototype, "defaultFilter", {
                    set: function (name) {
                        this.selectFilter(name);
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoFilter.prototype.selectFilter = function (name) {
                    this.filters.forEach(function (item) {
                        if (item.name === name) {
                            item.checked = true;
                        }
                        else {
                            item.checked = false;
                        }
                    });
                };
                TodoFilter.prototype.onFilterBtnClick = function (filter) {
                    this.selectFilter(filter.name);
                    this.filterChange.emit(filter);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoFilter.prototype, "filterChange", void 0);
                TodoFilter = __decorate([
                    core_1.Component({
                        selector: '[todo-filter]',
                        inputs: ['defaultFilter:todo-filter'],
                        template: "\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\"\n        *ngFor=\"#filter of filters\"\n        [class.active]=\"filter.checked\"\n        (click)=\"onFilterBtnClick(filter)\">\n        {{filter.name}}\n      </button>\n\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoFilter);
                return TodoFilter;
            })();
            exports_1("TodoFilter", TodoFilter);
        }
    }
});
//# sourceMappingURL=todo.filter.js.map