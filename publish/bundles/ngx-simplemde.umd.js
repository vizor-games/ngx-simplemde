(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-simplemde', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-simplemde"] = {}, global.ng.core, global.ng.forms, global.ng.common));
})(this, (function (exports, i0, forms, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var SimplemdeConfig = /** @class */ (function () {
        function SimplemdeConfig() {
            /**
             * 风格，默认：`antd`
             */
            this.style = 'antd';
        }
        return SimplemdeConfig;
    }());

    var SimplemdeComponent = /** @class */ (function () {
        function SimplemdeComponent(cog, zone, doc) {
            this.cog = cog;
            this.zone = zone;
            this.doc = doc;
            this.value = '';
            this.options = {};
            this.disabled = false;
            cog = Object.assign(Object.assign({}, new SimplemdeConfig()), cog);
            this.style = cog.style;
            this.delay = cog.delay || 0;
        }
        Object.defineProperty(SimplemdeComponent.prototype, "Instance", {
            get: function () {
                return this.instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Call [setOption](https://codemirror.net/doc/manual.html#setOption) method of Codemirror.
         */
        SimplemdeComponent.prototype.setOptions = function (option, value) {
            if (!this.instance) {
                return;
            }
            this.instance.codemirror.setOption(option, value);
        };
        SimplemdeComponent.prototype._getWin = function () {
            return this.doc.defaultView || window;
        };
        SimplemdeComponent.prototype.initDelay = function () {
            var _this = this;
            if (!(typeof document === 'object' && !!document)) {
                return;
            }
            if (this.delay > 0) {
                setTimeout(function () { return _this.init(); }, this.delay);
            }
            else {
                this.init();
            }
        };
        SimplemdeComponent.prototype.init = function () {
            var _this = this;
            var win = this._getWin();
            if (typeof win.SimpleMDE === 'undefined') {
                throw new Error("Could not find SimpleMDE object.");
            }
            this.destroy();
            var config = Object.assign(Object.assign(Object.assign({}, this.cog), this.options), (this.style === 'antd'
                ? {
                    spellChecker: false,
                    autoDownloadFontAwesome: false,
                }
                : {}));
            config.element = this.con.nativeElement;
            this.zone.runOutsideAngular(function () {
                _this.instance = new win.SimpleMDE(config);
                if (_this.value) {
                    _this.instance.value(_this.value);
                }
                _this.instance.codemirror.on('change', function () {
                    _this.value = _this.instance.value();
                    _this.zone.run(function () { return _this.onChange(_this.value); });
                });
                _this.setDisable();
            });
        };
        SimplemdeComponent.prototype.destroy = function () {
            if (this.instance) {
                this.instance.toTextArea();
                this.instance = null;
            }
        };
        SimplemdeComponent.prototype.setDisable = function () {
            var _this = this;
            if (this.instance) {
                this.zone.runOutsideAngular(function () { return (_this.instance.codemirror.options.readOnly = _this.disabled); });
            }
        };
        SimplemdeComponent.prototype.ngAfterViewInit = function () {
            this.initDelay();
        };
        SimplemdeComponent.prototype.ngOnChanges = function (changes) {
            if (changes.options && !changes.options.firstChange) {
                this.initDelay();
            }
        };
        SimplemdeComponent.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        SimplemdeComponent.prototype.writeValue = function (value) {
            this.value = value;
            if (this.instance) {
                this.instance.value(this.value);
            }
        };
        SimplemdeComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        SimplemdeComponent.prototype.registerOnTouched = function (_fn) { };
        SimplemdeComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.setDisable();
        };
        return SimplemdeComponent;
    }());
    SimplemdeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: SimplemdeComponent, deps: [{ token: SimplemdeConfig }, { token: i0__namespace.NgZone }, { token: common.DOCUMENT }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SimplemdeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SimplemdeComponent, selector: "simplemde", inputs: { options: "options", style: "style", delay: "delay", disabled: "disabled" }, providers: [
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: i0.forwardRef(function () { return SimplemdeComponent; }),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "con", first: true, predicate: ["con"], descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: " <textarea #con></textarea> ", isInline: true, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: SimplemdeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'simplemde',
                        template: " <textarea #con></textarea> ",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return SimplemdeComponent; }),
                                multi: true,
                            },
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], ctorParameters: function () {
            return [{ type: SimplemdeConfig }, { type: i0__namespace.NgZone }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [common.DOCUMENT]
                        }] }];
        }, propDecorators: { con: [{
                    type: i0.ViewChild,
                    args: ['con']
                }], options: [{
                    type: i0.Input
                }], style: [{
                    type: i0.Input
                }], delay: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }] } });

    var SimplemdeModule = /** @class */ (function () {
        function SimplemdeModule() {
        }
        SimplemdeModule.forRoot = function (config) {
            return {
                ngModule: SimplemdeModule,
                providers: [{ provide: SimplemdeConfig, useValue: config }],
            };
        };
        return SimplemdeModule;
    }());
    SimplemdeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: SimplemdeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SimplemdeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: SimplemdeModule, declarations: [SimplemdeComponent], imports: [common.CommonModule], exports: [SimplemdeComponent] });
    SimplemdeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: SimplemdeModule, imports: [[common.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: SimplemdeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                        declarations: [SimplemdeComponent],
                        exports: [SimplemdeComponent],
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SimplemdeComponent = SimplemdeComponent;
    exports.SimplemdeConfig = SimplemdeConfig;
    exports.SimplemdeModule = SimplemdeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-simplemde.umd.js.map
