import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT, CommonModule } from '@angular/common';

class SimplemdeConfig {
    constructor() {
        /**
         * 风格，默认：`antd`
         */
        this.style = 'antd';
    }
}

class SimplemdeComponent {
    constructor(cog, zone, doc) {
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
    get Instance() {
        return this.instance;
    }
    /**
     * Call [setOption](https://codemirror.net/doc/manual.html#setOption) method of Codemirror.
     */
    setOptions(option, value) {
        if (!this.instance) {
            return;
        }
        this.instance.codemirror.setOption(option, value);
    }
    _getWin() {
        return this.doc.defaultView || window;
    }
    initDelay() {
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        if (this.delay > 0) {
            setTimeout(() => this.init(), this.delay);
        }
        else {
            this.init();
        }
    }
    init() {
        const win = this._getWin();
        if (typeof win.SimpleMDE === 'undefined') {
            throw new Error(`Could not find SimpleMDE object.`);
        }
        this.destroy();
        const config = Object.assign(Object.assign(Object.assign({}, this.cog), this.options), (this.style === 'antd'
            ? {
                spellChecker: false,
                autoDownloadFontAwesome: false,
            }
            : {}));
        config.element = this.con.nativeElement;
        this.zone.runOutsideAngular(() => {
            this.instance = new win.SimpleMDE(config);
            if (this.value) {
                this.instance.value(this.value);
            }
            this.instance.codemirror.on('change', () => {
                this.value = this.instance.value();
                this.zone.run(() => this.onChange(this.value));
            });
            this.setDisable();
        });
    }
    destroy() {
        if (this.instance) {
            this.instance.toTextArea();
            this.instance = null;
        }
    }
    setDisable() {
        if (this.instance) {
            this.zone.runOutsideAngular(() => (this.instance.codemirror.options.readOnly = this.disabled));
        }
    }
    ngAfterViewInit() {
        this.initDelay();
    }
    ngOnChanges(changes) {
        if (changes.options && !changes.options.firstChange) {
            this.initDelay();
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    writeValue(value) {
        this.value = value;
        if (this.instance) {
            this.instance.value(this.value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(_fn) { }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.setDisable();
    }
}
SimplemdeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeComponent, deps: [{ token: SimplemdeConfig }, { token: i0.NgZone }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
SimplemdeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SimplemdeComponent, selector: "simplemde", inputs: { options: "options", style: "style", delay: "delay", disabled: "disabled" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SimplemdeComponent),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "con", first: true, predicate: ["con"], descendants: true }], usesOnChanges: true, ngImport: i0, template: ` <textarea #con></textarea> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'simplemde',
                    template: ` <textarea #con></textarea> `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SimplemdeComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: SimplemdeConfig }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { con: [{
                type: ViewChild,
                args: ['con']
            }], options: [{
                type: Input
            }], style: [{
                type: Input
            }], delay: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class SimplemdeModule {
    static forRoot(config) {
        return {
            ngModule: SimplemdeModule,
            providers: [{ provide: SimplemdeConfig, useValue: config }],
        };
    }
}
SimplemdeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SimplemdeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, declarations: [SimplemdeComponent], imports: [CommonModule], exports: [SimplemdeComponent] });
SimplemdeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [SimplemdeComponent],
                    exports: [SimplemdeComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SimplemdeComponent, SimplemdeConfig, SimplemdeModule };
//# sourceMappingURL=ngx-simplemde.js.map
