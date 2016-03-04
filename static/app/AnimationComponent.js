System.register([], function(exports_1) {
    var ANIMATION_MAP, AnimationComponent;
    return {
        setters:[],
        execute: function() {
            ANIMATION_MAP = {
                leftToRight: 'left-to-right',
                slide: 'slide',
                fade: 'fade'
            };
            AnimationComponent = (function () {
                function AnimationComponent(elRef, renderer) {
                    this.elRef = elRef;
                    this.renderer = renderer;
                }
                AnimationComponent.prototype.getAnimateClassName = function () {
                    var cls = [];
                    switch (this.animation) {
                        case 'slide':
                            cls.push(ANIMATION_MAP[this.animation]);
                            cls.push(ANIMATION_MAP[this.direction]);
                            break;
                        case 'fade':
                            cls.push(ANIMATION_MAP[this.animation]);
                    }
                    return cls;
                };
                AnimationComponent.prototype.setElementClass = function () {
                    var _this = this;
                    this.getAnimateClassName().forEach(function (item) {
                        _this.renderer.setElementClass(_this.elRef, item, true);
                    });
                };
                AnimationComponent.prototype.ngOnInit = function () {
                    if (this.animation) {
                        this.setElementClass();
                    }
                };
                AnimationComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.renderer.setElementStyle(_this.elRef, 'transitionDelay', _this.delay + "ms");
                        _this.renderer.setElementClass(_this.elRef, 'in', true);
                    }, 0);
                };
                AnimationComponent.prototype.ngOnDestroy = function () {
                    this.renderer.setElementClass(this.elRef, 'in', false);
                };
                return AnimationComponent;
            })();
            exports_1("AnimationComponent", AnimationComponent);
        }
    }
});
//# sourceMappingURL=AnimationComponent.js.map